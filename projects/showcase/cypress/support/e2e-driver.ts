/// <reference types="cypress" />
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

export class E2eDriver {
  private width: number;
  private height: number;
  private referenceImageBuffer: Buffer;

  given = {
    exists: (selector: string): E2eDriver => {
      cy.get(selector).should('exist');
      return this;
    },
  };

  when = {
    visit: (url: string): E2eDriver => {
      cy.visit(url);
      return this;
    },
    wait: (ms: number): E2eDriver => {
      cy.wait(ms);
      return this;
    },
    waitForLanguageToChange: (): E2eDriver => this.when.wait(7000),
    clickLanguageButton: (language: string): E2eDriver => {
      cy.get('.lang-button').contains(language).click();
      return this;
    },
    clickControlButton: (selector: string): E2eDriver => {
      cy.get(selector).should('exist').click();
      return this;
    },
    takeImageSnapshot: (): E2eDriver => {
      cy.log('takeImageSnapshot()');
      cy.get('canvas').then(this.initReferenceImage);
      return this;
    },
    isCurrentImageEqualToSnapshot: (): E2eDriver => {
      cy.log('isCurrentImageEqualToSnapshot()');
      cy.get('canvas')
        .then(this.compareToReference)
        .its('mismatches')
        .should('eq', 0);
      return this;
    },
    isCurrentImageNotEqualToSnapshot: (): E2eDriver => {
      cy.log('isCurrentImageNotEqualToSnapshot()');
      cy.get('canvas')
        .then(this.compareToReference)
        .its('mismatches')
        .should('be.gt', 0);
      return this;
    },
  };

  private toImageBitmapBuffer(canvas: HTMLCanvasElement) {
    const base64 = canvas.toDataURL('image/png').replace(/data:.*;base64,/, '');
    cy.log(base64.substring(0, 256));
    const buff = Cypress.Buffer.from(base64, 'base64');
    const png = PNG.sync.read(buff as any);
    return png.data;
  }

  private initReferenceImage($element: any) {
    let ssPath: string;
    const self = this;

    return cy
      .wrap($element)
      .screenshot('e2e-driver-initReferenceImage', {
        capture: 'viewport',
        overwrite: true,
        onAfterScreenshot($el, props: any) {
          cy.log('onAfterScreenshot');
          ssPath = props.path;
          self.height = props.dimensions.height;
          self.width = props.dimensions.width;
        },
      })
      .then(() => {
        cy.log('onAfterScreenshot - then');
        cy.readFile(ssPath, null).then((png) => {
          this.referenceImageBuffer = png;
        });
      });
  }

  private compareToReference($element: any) {
    let ssPath: string;
    let self = this;

    return cy
      .wrap($element)
      .screenshot('e2e-driver-compareToReference', {
        capture: 'viewport',
        overwrite: true,
        clip: { x: 0, y: 0, height: self.height, width: self.width },
        onAfterScreenshot($el, props: any) {
          cy.log('onAfterScreenshot');
          ssPath = props.path;
        },
      })
      .then(() => {
        cy.log('onAfterScreenshot - then');
        cy.readFile(ssPath, null).then((png) => {
          const currentImageBuffer = png;

          const mismatchCount = pixelmatch(
            this.referenceImageBuffer,
            currentImageBuffer,
            null,
            this.width,
            this.height
          );

          return cy.wrap({ mismatches: mismatchCount });
        });
      });
  }
}
