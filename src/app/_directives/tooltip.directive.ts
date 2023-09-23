import { Directive, ElementRef, HostListener, Input, OnDestroy } from "@angular/core";

@Directive({selector: "[tooltip]"})
/**
 * Add a tooltip to an element on hover
 *
 * The current implementation is largely taken from
 * https://plainenglish.io/blog/creating-a-tooltip-directive-in-angular-abfc607d52f3
 */
export class TooltipDirective implements OnDestroy {
  /** The text to display in the tooltip */
  @Input() tooltip = "";

  /** The delay, in milliseconds, to wait before displaying the tooltip text on hover */
  @Input() delay? = 190; // Optional delay input, in ms

  /** The HTML element used to contain the tooltip */
  private myPopup: HTMLDivElement | undefined = undefined;

  /** The timer used to track how long an element has been hovered over, used to enforce `delay` */
  private timer: NodeJS.Timeout | undefined = undefined;

  /**
   * Construct a new `TooltipDirective`
   * @param el - The element to apply a tooltip to
   */
  constructor(private el: ElementRef) {}

  /** Destroy the tooltip, if it is shown */
  ngOnDestroy(): void {
    if (this.myPopup) {
      this.myPopup.remove();
    }
  }

  /**
   * The callback for entering (hovering) the element targeted by this directive, initializes delayed construction of
   * the visible tooltip
   */
  @HostListener("mouseenter")
  onMouseEnter(): void {
    this.timer = setTimeout(() => {
      const x =
        this.el.nativeElement.getBoundingClientRect().left +
        this.el.nativeElement.offsetWidth / 2; // Get the middle of the element
      const y =
        this.el.nativeElement.getBoundingClientRect().top +
        this.el.nativeElement.offsetHeight +
        6; // Get the bottom of the element, plus a little extra
      this.createTooltipPopup(x, y);
    }, this.delay);
  }

  /**
   * The callback for exiting the element targeted by this directive, initializing the immediate destruction of the
   * visible tooltip (if one exists)
   */
  @HostListener("mouseleave")
  onMouseLeave() {
    if (this.timer) clearTimeout(this.timer);
    if (this.myPopup) {
      this.myPopup.remove();
    }
  }

  /**
   * Create the tooltip in the provided position
   * @param x - The fixed x-axis location of the tooltip container, expected in pixels
   * @param y - The fixed y-axis location of the tooltip container, expected in pixels
   */
  private createTooltipPopup(x: number, y: number) {
    const popup = document.createElement("div");
    popup.innerHTML = this.tooltip;
    popup.setAttribute("class", "tooltip-container");
    popup.style.top = y.toString() + "px";
    popup.style.left = x.toString() + "px";
    document.body.appendChild(popup);
    this.myPopup = popup;
    setTimeout(() => {
      if (this.myPopup) this.myPopup.remove();
    }, 5000); // Remove tooltip after 5 seconds
  }
}
