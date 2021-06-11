import { ApiConfig } from './utils/types';
import { serialize } from './utils/helpers';

const SANTANDER_CHECKOUT_WIDGET = class {
  private elId: string;
  private config: Partial<ApiConfig>;
  private iframeUrl: string;
  private targetUrl: string = 'http://localhost:3000/';
  private iframeId: string = '_CHECKOUT_WIDGET_IFRAME_';
  private containerHeight: string = '150px';
  private containerWidth: string = '400px';

  constructor (elId: string, config: Partial<ApiConfig>) {
    this.elId = elId;
    this.config = config;
    this.iframeUrl = `${this.targetUrl}?${serialize(this.config)}`;
    this.setFrameAndContainerMeasures({
      containerHeight:
          this.config.heightWithDropdown
        || this.config.containerHeight
        || this.containerHeight,
      containerWidth: this.config.containerWidth || this.containerWidth,
    },
    Boolean(this.config.heightWithDropdown));
    this.buildIframe();
  }

  buildIframe () {
    const container: HTMLElement | null = document.querySelector(`#${this.elId}`);
    const iframe = document.createElement('iframe');
    // Add attributes
    iframe.src = this.iframeUrl;
    iframe.id = this.iframeId;
    iframe.style.height = this.containerHeight;
    iframe.style.width = this.containerWidth;
    iframe.style.border = '0';
    iframe.style.overflow = 'hidden';
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    if (container) {
      container.appendChild(iframe);
      container.style.position = 'relative';
      container.style.display = 'inline-block';
      container.style.height = this.containerHeight;
      container.style.width = this.containerWidth;
    }
  }

  increaseFrameMeasures (pxMeasure: string): string {
    const asInt = Number(pxMeasure.split('px')[0]);
    return `${asInt + 10}px`;
  }

  setFrameAndContainerMeasures ({ containerHeight, containerWidth }:
  {
    containerHeight: string,
    containerWidth: string
  },
  increaseHeight: boolean) {
    if (containerHeight) {
      this.containerHeight = !increaseHeight
        ? this.increaseFrameMeasures(containerHeight)
        : containerHeight;
    }
    if (containerWidth) {
      this.containerWidth = this.increaseFrameMeasures(containerWidth);
    }
  }
};

declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
      SANTANDER_CHECKOUT_WIDGET: typeof SANTANDER_CHECKOUT_WIDGET
    }
}

window.SANTANDER_CHECKOUT_WIDGET = SANTANDER_CHECKOUT_WIDGET;
