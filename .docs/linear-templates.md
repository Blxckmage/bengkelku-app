# Linear Issue Templates

Create these 4 templates in **Linear → Team Settings → Templates → Issue templates → New template → Standard**.

Name each template exactly as shown below and paste the body as its description.

---

## Feature

```markdown
## Context / Why
<!-- Why are we building this? What user need or business goal does this address? -->

## Scope
<!-- What exactly will this feature include? Be specific about what's in scope. -->

### In Scope
- [ ]

### Out of Scope
<!-- What are we explicitly NOT doing? What's deferred? -->
- [ ]

## Acceptance Criteria
<!-- Checklist that must be met for this to be considered done -->
- [ ]

## Design
<!-- Link to Figma design or note if no design needed -->
<!-- If blocked on design, add "blocked-design" label -->

## Technical Approach
<!-- High-level implementation plan, architecture decisions, or key considerations -->

## Links
<!-- Related issues, documentation, RFCs, or external resources -->

## Documentation
<!-- What documentation needs to be written or updated? -->

---

## Definition of Done
- [ ] Acceptance criteria met
- [ ] Tests written; CI green (tests, Biome, typecheck)
- [ ] Code reviewed and approved
- [ ] QA passed on preview deployment -> set status **QA Passed**
- [ ] Merged to main and deployed
- [ ] Post-deploy log check completed
- [ ] Smoke test on main passed
- [ ] Documentation section filled in this issue
- [ ] Set status **Done**
```

---

## Bug

```markdown
## Summary
<!-- Brief description of the bug -->

## Steps to Reproduce
1. 
2. 
3. 

## Expected Behavior
<!-- What should happen? -->

## Actual Behavior
<!-- What actually happens? -->

## Screenshot / Video
<!-- If applicable, add visual evidence -->

## Environment
- **Browser/Device**: 
- **OS**: 
- **App Version/Commit**: 
- **User Role**: 

## Severity
<!-- Add appropriate label: sev-high, sev-medium, or sev-low -->
- **sev-high**: Critical bug, blocks core functionality, affects many users
- **sev-medium**: Important bug, workaround exists, affects some users
- **sev-low**: Minor bug, cosmetic issue, minimal impact

## Linked Issue
<!-- If this is a regression, link to the original feature issue -->

## Technical Notes
<!-- Any technical context, error messages, logs, or debugging info -->

---

## Definition of Done
- [ ] Root cause identified
- [ ] Fix implemented with test coverage
- [ ] CI green (tests, Biome, typecheck)
- [ ] Code reviewed and approved
- [ ] QA passed on preview deployment -> set status **QA Passed**
- [ ] Merged to main and deployed
- [ ] Post-deploy log check completed
- [ ] Smoke test on main passed
- [ ] Documentation section filled in this issue
- [ ] Set status **Done**
```

---

## Migration

```markdown
## Migration Type
<!-- Check one -->
- [ ] Schema change (add/modify/remove columns or tables)
- [ ] Data migration (transform existing data)
- [ ] Index change
- [ ] Other: 

## Reason
<!-- Why is this migration necessary? -->

## Schema Changes
<!-- Describe the database changes in detail -->
```sql
-- Example: SQL for the migration

```

## Data Impact
- **Estimated rows affected**: 
- **Estimated migration time**: 
- **Downtime required**: Yes / No

## Safety Check
- [ ] Migration is reversible or has rollback plan
- [ ] Migration tested on production-like dataset
- [ ] No data loss risk identified
- [ ] Backward compatible (old code works during migration)
- [ ] Forward compatible (new code works before migration)

## Rollback Plan
<!-- How do we undo this if something goes wrong? -->

## Dependent Issues
<!-- Issues that must be completed before/after this migration -->
- **Before**: 
- **After**: 

## Technical Notes
<!-- Implementation details, performance considerations, locking concerns -->

---

## Definition of Done
- [ ] Migration script written and reviewed
- [ ] Rollback script written and reviewed
- [ ] Tested on staging with production-like data
- [ ] All safety checks passed
- [ ] Code reviewed and approved
- [ ] QA passed on preview deployment -> set status **QA Passed**
- [ ] Migration executed on production
- [ ] Post-migration verification completed
- [ ] Rollback script verified (if safe to test)
- [ ] Documentation section filled in this issue
- [ ] Set status **Done**
```

---

## Hotfix

```markdown
## Incident Summary
<!-- What broke? What's the user-facing impact? -->

## Impact
| Field | Details |
|-------|---------|
| **Severity** | Critical / High / Medium |
| **Users affected** | |
| **Services affected** | |
| **Started at** | <!-- ISO timestamp or "now" --> |
| **Current status** | Investigating / Fixing / Monitoring / Resolved |

## Root Cause
<!-- What caused this incident? Fill in once identified -->

## Fix Applied
<!-- What did we do to resolve the incident? -->

## Prevention
<!-- How do we prevent this from happening again? -->
- [ ] Add monitoring/alerting
- [ ] Add tests
- [ ] Improve documentation
- [ ] Refactor vulnerable code
- [ ] Other: 

## Timeline
<!-- Key events during the incident -->
- **[Time]**: Incident detected
- **[Time]**: Investigation started
- **[Time]**: Root cause identified
- **[Time]**: Fix deployed
- **[Time]**: Incident resolved
- **[Time]**: Monitoring period ended

## Follow-up Issues
<!-- Create separate issues for prevention work or technical debt -->
- 

## Post-Incident Review
<!-- Link to post-mortem document or notes from review meeting -->

---

## Definition of Done
- [ ] Immediate fix deployed to production
- [ ] Incident resolved and users can access service
- [ ] Root cause documented
- [ ] Monitoring confirms stability
- [ ] Post-incident review completed
- [ ] Prevention tasks created as follow-up issues
- [ ] Documentation section filled in this issue
- [ ] Set status **Done**
```

---

## Labels

Already exist (created in the 2026-11-05 cleanup, see `.claude/LINEAR_CLEANUP_SUMMARY.md`):

| Label | Description |
|-------|-------------|
| `blocked-design` | Waiting on Figma design |
| `sev-high` | Critical severity |
| `sev-medium` | Medium severity |
| `sev-low` | Low severity |

Plus type labels: `feature`, `bug`, `migration`, `incident` — apply the matching type label when creating an issue from a template.

---

## Statuses (still manual — Linear API can't create these)

Create this manually in **Settings -> Teams -> Workflow**:

**QA Passed**
   - Type: Started
   - Position: Between In Review and Done

Correct workflow order:

    Backlog -> Todo -> In Progress -> In Review -> QA Passed -> Done
