# Dr.Effects Landing Page Storyboard

## Project Overview
**Service**: Dr.Effects - AI-powered effects pedal assistant for guitarists  
**Launch Target**: Q3 2025  
**Tech Stack**: Next.js + Firebase Hosting + Firebase Analytics  
**Development Timeline**: 8-10 weeks total  

---

## Landing Page Storyboard

### Section 1: Hero Section
**Layout**: Full viewport height with centered content

#### Visual Elements:
- **Background**: Dark gradient (music/studio aesthetic) with subtle guitar/amp silhouettes
- **Main Headline**: "Your AI Guitar Effects Assistant" 
  - Typography: Bold, large (48px desktop, 32px mobile)
  - Color: White/Light gray
- **Subheadline**: "Discover perfect pedal combinations, get personalized recommendations, and create your signature sound with AI-powered guidance."
  - Typography: Medium weight, readable (18px desktop, 16px mobile)
  - Color: Light gray/Muted white
- **Hero Visual**: Interactive pedalboard preview
  - 3-4 sample pedals in a horizontal row
  - Subtle glow effects and connection lines
  - Hover animations showing signal flow

#### Interactive Elements:
- **Primary CTA**: "Try Demo" (Prominent button, brand color)
- **Secondary CTA**: "Start Your Tone Journey" (Ghost button style)
- **Scroll Indicator**: Animated down arrow

#### Technical Implementation:
- CSS Grid for layout
- Intersection Observer for scroll animations
- Preloaded hero images (WebP format)
- Mobile-first responsive breakpoints

---

### Section 2: Feature Section
**Layout**: Grid layout with 6 feature cards (3x2 on desktop, single column on mobile)

#### Section Header:
- **Title**: "Everything You Need to Perfect Your Sound"
- **Subtitle**: "From gear analysis to tone recommendations"

#### Feature Cards:
Each card contains icon, title, description, and subtle hover effects

**Card 1: 🎸 Smart Gear Registration**
- Visual: Guitar pedal icons with checkmarks
- Description: "Register your current and planned effects pedals. AI analyzes your gear for optimal recommendations. Compatible with all major pedal brands."

**Card 2: 🎯 Personalized Tone Recommendations**
- Visual: Target/bullseye with sound waves
- Description: "Get custom settings for any genre or specific tone. AI suggests knob positions and signal chain order based on your registered equipment."

**Card 3: 🛒 Intelligent Equipment Suggestions** 
- Visual: Shopping cart with pedal icons
- Description: "Discover missing pieces for your dream sound. Purchase links and video demonstrations. Budget-friendly alternatives included."

**Card 4: 🧠 Expert Sound & Technical Advice**
- Visual: Brain icon with audio waveforms
- Description: "Complex audio concepts explained simply. Signal chain optimization guidance. Voltage, current, and connection troubleshooting."

**Card 5: 💾 Preset Management**
- Visual: Save/folder icons with pedal settings
- Description: "Save and organize your favorite settings. Quick access to your custom tone presets. Perfect for live performance setup."

**Card 6: 🤝 Community Sharing**
- Visual: People icons sharing content
- Description: "Share your pedal combinations with others. Discover setups from fellow musicians. Rate and review community presets."

#### Technical Implementation:
- CSS Grid with auto-fit columns
- Card hover animations using transform/opacity
- Progressive image loading for icons
- Intersection Observer for scroll-triggered animations

---

### Section 3: Demo Section
**Layout**: Full-width section with tabbed interface for 3 scenarios

#### Section Header:
- **Title**: "Experience Dr.Effects in Action"
- **Subtitle**: "Interactive demos with real pedal data and step-by-step AI guidance"

#### Demo Interface Layout:
```
[Scenario Tabs: SRV Tone | Power Check | Presets]
+--------------------------------------------------+
| Selected Scenario Content Area                   |
| +----------------------------------------------+ |
| | Pedalboard Visualization (CSS Grid)          | |
| | +--+ +--+ +--+ +--+                         | |
| | |P1| |P2| |P3| |P4| SVG connection lines    | |
| | +--+ +--+ +--+ +--+                         | |
| +----------------------------------------------+ |
| User Options Panel                              |
| [ ] Create SRV setup                           |
| [ ] Recommend additional effect                |
+--------------------------------------------------+
```

#### Scenario 1: "Create Stevie Ray Vaughan Tone"
**Step 1 UI State**:
- **Visible Pedals**: Pedal Pawn Texan Twang → Ibanez TS808 → TC Electronic Flashback 2
- **Visual Effects**: Highlighted pedals with pulse animation
- **Info Cards**: Show price, specs, description for each pedal
- **SVG Connections**: Orange signal lines connecting pedals

**Step 2 UI State**:
- **New Pedal Added**: Wampler Ego Compressor (fade-in animation)
- **Updated Chain**: Compressor → Texan Twang → TS808 → Flashback 2
- **Highlight Effect**: New pedal glows with brand color
- **Info Update**: Compressor specs appear in side panel

#### Scenario 2: "Check Electrical Info & Recommend Power Supply"
**Step 1 UI State**:
- **Pedal Cards Expanded**: Show voltage, current, polarity for each pedal
- **Visual Enhancement**: Color-coded power requirements
- **Data Table**: Organized power consumption info

**Step 2 UI State**:
- **Power Supply Added**: Central power hub with connection lines to all pedals
- **Power Calculations**: Total consumption display (1.2A)
- **Recommendation Card**: Voodoo Lab Pedal Power 3 Plus with specs

#### Scenario 3: "Preset Recommendation"
**UI State**:
- **Preset Panels**: 3 genre-specific preset cards
- **Knob Visualizations**: SVG knob controls showing positions
- **Settings Display**: 
  - Texas Blues: TS808 (Drive: 4, Tone: 6, Level: 5)
  - Rock: BD-2 (Level: 6, Tone: 5, Drive: 7)
  - Clean: RC Booster (Gain: 3, Treble: +2dB, Bass: +1dB)

#### Technical Implementation:
- **State Management**: React Context for demo progression
- **Animations**: Framer Motion for pedal transitions
- **SVG Generation**: Dynamic connection lines based on signal chain
- **Data Structure**: JSON-based pedal database with lazy loading
- **Responsive Design**: Simplified single-column layout on mobile

---

### Section 4: Pricing Section
**Layout**: Two-column comparison table (stacked on mobile)

#### Section Header:
- **Title**: "Choose Your Plan" 
- **Subtitle**: "Start free, upgrade when you need more"

#### Plan Cards:
**Free Plan Card**:
- **Price**: "$0/month" (large, prominent)
- **Features List**:
  - ✓ Limited AI recommendations (5 per day)
  - ✓ Basic gear registration
  - ✓ Community preset viewing
  - ✓ Standard support
- **CTA**: "Start Free" (secondary button style)

**Plus Plan Card** (Highlighted/Recommended):
- **Badge**: "Most Popular" 
- **Price**: "$5.90/month" (large, highlighted)
- **Features List**:
  - ✓ Unlimited AI recommendations
  - ✓ Advanced gear analysis
  - ✓ Unlimited preset storage
  - ✓ Community sharing & interaction
  - ✓ Priority support
  - ✓ Purchase link integration
- **CTA**: "Try Plus" (primary button style)

#### Revenue Streams Note:
- Small text section about affiliate partnerships and brand collaborations

#### Technical Implementation:
- **Responsive Grid**: Flexbox for plan comparison
- **Interactive Elements**: Plan selection with hover effects
- **Firebase Integration**: Plan selection tracking via Analytics
- **A/B Testing**: Remote Config for price testing

---

### Section 5: Footer
**Layout**: Multi-column footer with organized link sections

#### Column Structure:
**Column 1: Quick Links**
- About Dr.Effects
- How It Works  
- Pricing
- Community
- Support
- Contact

**Column 2: Resources**  
- Gear Database
- Tone Guides
- Video Tutorials
- FAQ
- Blog

**Column 3: Legal & Social**
- Privacy Policy
- Terms of Service  
- Cookie Policy
- Social Media Links (Instagram, YouTube, Twitter)

**Column 4: Newsletter Signup**
- **Headline**: "Get tone tips and gear updates"
- **Input Field**: Email subscription
- **CTA Button**: "Subscribe"
- **Privacy Note**: GDPR-compliant subscription notice

#### Technical Implementation:
- **Form Handling**: Firebase Functions for newsletter signup
- **Analytics**: Subscription conversion tracking
- **Responsive Design**: Single column stack on mobile
- **Social Icons**: SVG icons with hover animations

---

## Technical Architecture Summary

### Frontend Stack:
- **Framework**: Next.js 14 (App Router, SSG)
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion for interactions
- **State**: React Context for demo states
- **Images**: WebP format with AVIF fallbacks

### Deployment Stack:
- **Hosting**: Firebase Hosting with CDN
- **Analytics**: Firebase Analytics + GA4
- **Functions**: Firebase Functions (newsletter, contact forms)
- **A/B Testing**: Firebase Remote Config
- **Monitoring**: Firebase Performance + Crashlytics

### Performance Targets:
- **Initial Load**: <2 seconds
- **Interaction Response**: <300ms
- **Core Web Vitals**: Green scores across all metrics
- **Bundle Size**: <30KB for demo section

### Development Timeline:
1. **Week 1-2**: Hero + Feature sections
2. **Week 3-4**: Demo section implementation  
3. **Week 5-6**: Pricing + Footer, Firebase integration
4. **Week 7**: Testing, optimization, analytics setup
5. **Week 8**: Final polish, deployment, monitoring setup

---

## Update History
- **2025-01-XX**: Initial storyboard creation
- **2025-08-04**: Project setup completed, Hero & Feature sections implemented
- **2025-08-04**: Directory structure issue identified and resolved
- **Last Updated**: 2025-08-04

## Development Status & Important Notes

### Current Project Structure:
- **Root Directory**: `/Users/panbie/drEffects/` (contains planning documents)
- **Project Directory**: `/Users/panbie/drEffects/dr-effects-landing/` (contains actual Next.js project)
- **Critical**: All npm commands must be run from `dr-effects-landing` directory, not from root `drEffects` directory

### Development Server Status:
- **Status**: ✅ Running on localhost:3000
- **Directory**: Must be executed from `/Users/panbie/drEffects/dr-effects-landing/`
- **Version**: Next.js 14.2.15 (stable) + React 18.3.1 + Tailwind CSS v3
- **Note**: User has separate terminal running the dev server successfully

### Resolved Issues:
1. **Version Compatibility**: Downgraded from Next.js 15.4.5 → 14.2.15 for stability
2. **Directory Confusion**: Identified that commands were being run from wrong directory
3. **Tailwind CSS**: Converted from v4 → v3 with proper configuration
4. **Config Files**: Fixed next.config.ts → next.config.js format issue

### Current Implementation Status:
- ✅ Hero Section: Interactive pedalboard preview, gradient text, CTA buttons
- ✅ Feature Section: 6 feature cards with hover animations
- ✅ **Demo Section**: 3 interactive scenarios with real pedalboard data
  - **Scenario 1**: SRV Tone Creation (Texan Twang → TS808 → Flashback 2 + Ego Compressor)
  - **Scenario 2**: Power Management (Full 13-pedal analysis, 1200mA total, Voodoo Lab recommendation)
  - **Scenario 3**: Preset Recommendations (Texas Blues, Rock/Hard Rock, Clean/Jazz with real settings)
- 🔄 Pricing Section: Pending implementation  
- 🔄 Footer Section: Pending implementation

### Actual Pedalboard Configuration Used in Demo:
**Signal Chain**: Guitar → TC Electronic PolyTune 3 Mini → Xotic RC Booster → Wampler Ego Compressor → Pedal Pawn Texan Twang → Kingtone Blues Power → Ibanez TS808 → Boss BD-2 Blues Driver → MXR Micro Amp → Boss CH-1 Super Chorus → TC Electronic Flashback 2 → Electro-Harmonix Oceans 11 → Surfy Industries SurfyBear Metal → Guitar Amplifier

**Total Configuration**: 13 pedals, $2,500-3,000 USD, ~1200mA power consumption, 6.5kg weight

---

## Notes for Future Updates
- All pedal data sourced from samplePedalboard.json
- Demo scenarios based on demoSectionScenarioSpec.json
- Firebase configuration to be added during development
- A/B testing variations to be defined based on user feedback
- Mobile-specific interactions may need refinement during development

This storyboard serves as the single source of truth for the Dr.Effects landing page implementation.