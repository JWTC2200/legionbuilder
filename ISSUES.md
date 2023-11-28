## todo - pages

This is just a file to record my thoughts/issues with the code.

#### - buider/components/BuilderFormation.tsx

Issue with the compulsory/optional/choice sections. When passing slot: BUILDER_DETACHMENT_SLOT into BuilderDetachment will cause crash if the slot references are not correct. Add check to not render detachment if slot is not correct.

This isn't an issue if the data is entered correctly.

#### - dual faction formations

Formation slots & builder formation slots now have a faction key and more slots have been added to split Astartes and Solar slot types. Currently not being used because when enabled all user objects in local storage will be unable to select detachments as they've all been saved without the formation key.

To enable, builder/components/BuilderDetachment.tsx filter detachmentData by detachmentSlot.faction instead of passed in faction prop. Change the quick start formation as well!
