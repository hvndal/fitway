---
name: High-Performance Editorial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c6ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#999077'
  outline-variant: '#4d4732'
  surface-tint: '#e9c400'
  primary: '#fff6df'
  on-primary: '#3a3000'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#705d00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#f8f6f5'
  on-tertiary: '#303030'
  tertiary-container: '#dcd9d9'
  on-tertiary-container: '#5f5f5e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Oswald
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Oswald
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
This design system is defined by an authoritative, cinematic aesthetic that balances high-impact visuals with premium sophistication. It is designed for platforms that command attention—luxury automotive, high-end fitness, or exclusive financial editorial. 

The style utilizes a **High-Contrast / Bold** foundation, leaning heavily on "Obsidian" depths to provide a canvas for "Golden" accents. By moving away from neon-electric tones toward a richer, metallic-inspired palette, the interface shifts from "digital-native" to "prestige-performance." The overall feel is one of power, precision, and curated density, evoking an emotional response of trust and exclusivity.

## Colors
The color strategy centers on a **Dark Obsidian** foundation. The primary color is a **Sophisticated Gold (#FFD700)**, used sparingly but intentionally to draw focus to key actions and headers.

- **Primary:** Gold serves as the focal point for high-priority CTAs and active states.
- **Surface Palette:** Layers are built using Obsidian (#0A0A0A) as the base, with Secondary (#1A1A1A) and Tertiary (#262626) tones used to define container hierarchy.
- **Accents:** Use low-opacity versions of the primary gold for hover states and subtle divider lines to maintain a sense of luxury without overwhelming the user.

## Typography
Typography is the cornerstone of this design system’s authority. **Oswald** is utilized for all display and headline levels, leveraging its condensed, industrial character to create a sense of urgency and power. All headers are set in Uppercase to reinforce the editorial tone.

**Inter** is paired as the body and label typeface. Its neutral, systematic geometry provides a necessary counter-balance to the aggressive nature of Oswald, ensuring that long-form content remains highly legible and professional. Letter spacing is increased slightly for labels to enhance the premium, "spread" look often found in luxury branding.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain a cinematic, centered focus, while transitioning to a fluid model for mobile devices. 

- **Grid:** A 12-column grid is used for desktop (1280px max-width).
- **Rhythm:** A strict 8px spacing scale ensures consistency. 
- **White Space:** Generous vertical margins (64px+) are encouraged between sections to allow the content to breathe and to emphasize the high-contrast color transitions.
- **Reflow:** On mobile, side margins shrink to 16px, and multi-column layouts should collapse into a single-column stack to maintain the legibility of the Oswald headers.

## Elevation & Depth
In this dark-mode-first system, elevation is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows. 

As elements "rise" in the hierarchy, their surface color lightens slightly (from Obsidian to Secondary). To define boundaries without adding visual clutter, use 1px solid borders in a deep charcoal (#262626). For active or "featured" elements, a primary gold border may be used. 

Avoid heavy blurs or soft shadows; the aesthetic should remain crisp, flat, and architectural.

## Shapes
The shape language is "Soft" (0.25rem), providing just enough rounding to feel modern and polished without losing the strength of a sharp, professional edge. 

- **Standard Elements:** 4px radius for buttons, input fields, and small cards.
- **Large Containers:** Up to 12px (rounded-lg) for main content sections or modals.
- **Accents:** Use hard 0px corners for purely decorative elements or vertical dividers to lean into the industrial "Oswald" aesthetic.

## Components
- **Buttons:** Primary buttons are solid Gold (#FFD700) with Black text, using the `label-sm` type style for an authoritative feel. Secondary buttons use a ghost style with a subtle charcoal border.
- **Inputs:** Dark Obsidian backgrounds with 1px borders. Upon focus, the border transitions to Gold.
- **Chips/Badges:** Small, uppercase labels with a Tertiary (#262626) background. High-priority badges may use a Gold outline.
- **Cards:** Defined by Tonal Layers. Hover states should be indicated by a subtle increase in brightness of the surface color or a thin Gold top-border.
- **Lists:** Separated by thin 1px lines in Secondary (#1A1A1A), ensuring the Obsidian background remains continuous and expansive.