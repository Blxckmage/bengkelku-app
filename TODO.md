# TODO

## Critical: Fix TanStack Start Setup

### Issue
TanStack Start has version compatibility problems:
- `@tanstack/start` is deprecated, moving to `@tanstack/react-start`
- Version mismatches between packages causing build failures
- TypeScript errors in client.tsx and ssr.tsx
- Missing exports: `CONSTANTS` from `@tanstack/router-generator`

### Actions Needed
1. Research correct TanStack Start v1.77+ setup
2. Check if we need to pin specific versions
3. Fix TypeScript configuration
4. Re-enable build and typecheck in CI

### Workaround (Current State)
- Lint passing ✅
- Build disabled in CI temporarily
- TypeScript checking disabled temporarily
- Project structure in place

## Next Steps After Fix
- [ ] Add Tailwind CSS
- [ ] Add shadcn/ui components
- [ ] Set up Cloudflare Workers configuration
- [ ] Add Drizzle ORM and D1 setup
- [ ] Configure Better Auth
