---
name: Migration
description: Database schema change or data migration
---

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

## Definition of Done Checklist
- [ ] Migration script written and reviewed
- [ ] Rollback script written and reviewed
- [ ] Tested on staging with production-like data
- [ ] All safety checks passed
- [ ] Code reviewed and approved
- [ ] QA passed on preview deployment
- [ ] Migration executed on production
- [ ] Post-migration verification completed
- [ ] Rollback script verified (if safe to test)
- [ ] Documentation section filled in this issue
- [ ] Issue set to Done
