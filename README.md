# Legions Imperiallis list builder

### Notes

#### - buider/components/BuilderFormation.tsx

Issue with the compulsorp/optiona/choice sections. When passing slot: BUILDER_DETACHMENT_SLOT into BuilderDetachment will cause crash if the slot references are not correct. Add check to not render detachment if slot is not correct.
