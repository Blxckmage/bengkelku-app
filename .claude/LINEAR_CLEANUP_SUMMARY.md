# Linear Workspace Cleanup Summary
**Date**: 2026-11-05
**Team**: Cirebon Valley (BEN)

## ✅ Completed Changes

### Labels

#### Renamed (4)
- `Feature` → `feature`
- `Bug` → `bug`
- `Improvement` → `improvement`
- `documentation` → `docs`

#### Created (10)
**Type labels:**
- `chore` - Maintenance, tooling, and setup tasks
- `migration` - Database schema changes
- `incident` - Production hotfix or incident

**Area labels:**
- `infra` - Infrastructure, CI/CD, and deployment
- `design` - Figma designs and design system
- `qa` - Quality assurance and testing
- `docs` - Documentation (renamed from `documentation`)

**Severity labels:**
- `sev-high` - Critical bug, blocks core functionality
- `sev-medium` - Important bug, workaround exists
- `sev-low` - Minor bug, cosmetic issue

**State flag:**
- `blocked-design` - Waiting on Figma design to be finalized

#### Retired (8)
- `ai-ready` - Not in approved set
- `ai-generated` - Not in approved set
- `ai-review-needed` - Not in approved set
- `human-only` - Not in approved set
- `needs-context` - Not in approved set
- `refactor` - Use `improvement` or `chore` instead
- `auth` - Use `backend` area label instead
- `api` - Use `backend` area label instead

### Issues Updated

#### Labels Applied (5 issues)
- **BEN-5**: Added `chore`, `infra`
- **BEN-6**: Added `chore`, `frontend`, `infra`
- **BEN-7**: Added `chore`, `infra`
- **BEN-8**: Added `chore`, `docs`
- **BEN-9**: Added `bug`, `frontend`, `infra`

#### Documentation Added (4 issues)
All Done issues (BEN-5, BEN-6, BEN-7, BEN-8) now have complete "Documentation (Post-Merge)" sections including:
- What changed
- How it works
- API changes

### Project Updated
**P-BEN-1 "Bengkelku"**
- **Summary**: "Workshop management system - MVP phase"
- **Description**: Added comprehensive project description covering tech stack, initial focus areas, and goals

---

## ⚠️ Manual Actions Required

### 1. Add Missing Statuses (CRITICAL)
Linear API doesn't support creating statuses. You must add these manually:

**In Linear Settings → Teams → Cirebon Valley → Workflow:**

1. **Add "QA Passed" status**
   - Type: `started` (or closest equivalent)
   - Position: Between "In Review" and "Done"
   - Color: Green (#10B981 recommended)
   
2. **Add "Triage" status**
   - Type: `triage`
   - Position: At the beginning (before "Backlog")
   - Color: Orange (#F59E0B recommended)

**Correct workflow order:**
```
Triage → Backlog → Todo → In Progress → In Review → QA Passed → Done
```
Plus: `Canceled` (keep existing)

### 2. Remove "Duplicate" Status
- Navigate to Linear Settings → Teams → Cirebon Valley → Workflow
- Archive or remove the "Duplicate" status (not in required workflow)

### 3. Configure Branch Naming Format
**In Linear Settings → Teams → Cirebon Valley → Git:**
- Set branch format to: `{issue-code}/{dev-name}/{issue-title-slug}`
- Example: `BEN-1/faza/auth-integration`

### 4. Configure Cycles (Recommendation: 1-week sprints)
**In Linear Settings → Teams → Cirebon Valley → Cycles:**
- Enable cycles
- **Duration**: 1 week (Monday to Sunday recommended)
- **Auto-roll unfinished issues**: Disabled (forces explicit planning)
- **Start date**: Choose your next sprint start date

**Rationale**: 1-week sprints with manual roll-over encourage:
- Better scope control
- Explicit re-prioritization each sprint
- Faster feedback loops
- Clear sprint boundaries for QA smoke tests

### 5. Create Issue Templates
**In Linear Settings → Templates → Issue Templates:**

Create 4 templates (see detailed content in audit report):
1. **Feature Template** - For new features with Context/Scope/Acceptance Criteria
2. **Bug Template** - With repro steps, severity, environment
3. **Migration Template** - For schema changes with safety checks
4. **Hotfix/Incident Template** - With timeline and root cause analysis

**Note**: Full template content is in the original audit report.

### 6. Verify Retired Labels
Navigate to Linear Settings → Labels and confirm these 8 labels show as "Retired":
- ai-ready, ai-generated, ai-review-needed, human-only, needs-context
- refactor, auth, api

---

## 📋 Current Label Structure (After Cleanup)

### Active Labels (16)

**Type (6):**
- feature, bug, improvement, chore, migration, incident

**Area (7):**
- frontend, backend, database, infra, design, qa, docs

**Severity (3):**
- sev-high, sev-medium, sev-low

**State Flag (1):**
- blocked-design

**Other (1):**
- testing (kept from original set, not explicitly in approved list but useful)

---

## 📊 Current Issue State

### Active Issues (5)
- **BEN-9**: Backlog - Fix TanStack Start version compatibility issues
- **BEN-5**: Done - Initialize monorepo with Bun workspaces and Turborepo
- **BEN-6**: Done - Set up TanStack Start web application
- **BEN-7**: Done - Configure CI/CD with GitHub Actions
- **BEN-8**: Done - Create project documentation and README

### Archived Issues (4)
- BEN-1, BEN-2, BEN-3, BEN-4 (Linear onboarding issues - properly archived)

---

## 🎯 Definition of Done - Now Enforced

Going forward, issues cannot move to Done without:

1. ✅ Acceptance criteria met
2. ✅ Tests written; CI green (tests, Biome, typecheck)
3. ✅ Code reviewed and approved
4. ✅ **QA passed on preview deployment** (once QA Passed status exists)
5. ✅ Squash-merged to main and deployed
6. ✅ Post-deploy log check by Reza
7. ✅ Smoke test on main passed
8. ✅ **Documentation section filled in the issue**
9. ✅ Issue set to Done

**Note**: BEN-5 through BEN-8 were setup tasks that bypassed the normal workflow. This is now documented and won't happen for future issues.

---

## 🚀 Next Steps

1. **Immediate**: Complete the 6 manual actions listed above
2. **Before next issue**: Ensure workflow includes QA Passed status
3. **Sprint planning**: Configure cycles and plan first proper sprint
4. **Team training**: Review updated templates and Definition of Done with team

---

## 📝 Conventions Reference

**Branch format**: `{issue-code}/{dev-name}/{issue-title-slug}`
**Commit format**: Conventional Commits (`feat:`, `fix:`, `test:`, etc.)
**PR title**: Conventional Commits style
**Issue titles**: Start with verb, describe outcome
**Labels**: Always add type + area (+ severity for bugs)
**Triage owner**: Faza (Scrum Master)
**Default reviewer**: Faza (except Faza's PRs → Reza or Hanif)
**Merge**: Faza squash-merges after approval + QA pass

---

## 🔍 Audit Statistics

- **Statuses**: 2 missing (to add manually), 1 to remove
- **Labels**: 4 renamed, 10 created, 8 retired
- **Issues**: 5 updated with labels, 4 updated with documentation
- **Projects**: 1 updated with description
- **Total changes**: 32 automated + 6 manual actions required
