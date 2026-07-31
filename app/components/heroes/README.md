# Solution-Specific Hero Components

Each solution has its own unique Hero component that can be completely customized with different dashboard metrics, styling, and layout.

## Structure

```
app/components/heroes/
├── HeroArDenialFixation.tsx      (Denial Management & Fixation)
├── HERO_TEMPLATE.tsx              (Template for new heroes)
└── index.ts                        (Exports all heroes)

app/utils/
└── getHeroComponent.ts            (Maps slugs to hero components)
```

## How It Works

1. **Page receives slug** → `[slug]/page.tsx` gets the route parameter
2. **Layout receives slug** → `SolutionLayout` receives both `solution` and `slug`
3. **Dynamic import** → `getHeroComponent(slug)` returns the correct Hero component
4. **Render** → The specific hero is rendered with solution data

## Adding a New Solution Hero

### Step 1: Create the Hero Component

Copy `HERO_TEMPLATE.tsx` and rename it to your solution:

```bash
cp app/components/heroes/HERO_TEMPLATE.tsx app/components/heroes/HeroRcmManagement.tsx
```

### Step 2: Customize the Hero Card

Edit the hero card metrics specific to your solution:

```tsx
<div className="hero-card">
  <h4>— RCM Dashboard · 30-day</h4>
  <div className="denial-row">
    <span className="denial-lbl">Total claims processed</span>
    <span className="denial-val warn">1,247 claims</span>
  </div>
  {/* Add solution-specific metrics */}
</div>
```

### Step 3: Export from index.ts

Add to `app/components/heroes/index.ts`:

```ts
export { default as HeroRcmManagement } from './HeroRcmManagement';
```

### Step 4: Register in Mapper

Add to `app/utils/getHeroComponent.ts`:

```ts
const heroComponentMap = {
  'ar-denial-fixation': HeroArDenialFixation,
  'rcm-management': HeroRcmManagement,
  // Add more...
};
```

### Step 5: Done!

The page will automatically use the correct hero for that solution slug.

## Customization Options

Each hero component can have:

- **Different dashboard metrics** - Display solution-specific KPIs
- **Custom button text** - Change CTA button labels and targets
- **Different card layout** - Modify the hero card structure entirely
- **Custom styling** - Add inline styles or CSS classes
- **Alternative designs** - Some solutions might not need the card at all

## Example: RCM Management Hero

```tsx
// HeroRcmManagement.tsx
export default function HeroRcmManagement({ solution }: HeroProps) {
  return (
    <section className="hero">
      {/* ... SVG background ... */}
      <div className="hero-inner">
        <div>
          {/* Text content uses solution data */}
          <div className="eyebrow reveal reveal-1">{solution.hero?.eyebrow}</div>
          {/* ... */}
        </div>
        {/* RCM-specific dashboard card */}
        <div className="hero-card">
          <h4>— RCM Performance Dashboard</h4>
          <div className="denial-row">
            <span className="denial-lbl">Total claims processed</span>
            <span className="denial-val good">12,457</span>
          </div>
          {/* ... more RCM metrics ... */}
        </div>
      </div>
    </section>
  );
}
```

## Benefits

✅ **Complete Customization** - Each solution's hero is independent  
✅ **Easy to Add** - Just follow the 5 steps above  
✅ **No Conflicts** - Different metrics won't interfere  
✅ **Reusable Pattern** - Template makes it consistent  
✅ **Dynamic Routing** - Automatically uses the correct hero per slug
