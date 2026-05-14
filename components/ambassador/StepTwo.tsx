'use client';

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { FormValues } from '@/lib/ambassador-types';
import RadioPills from './RadioPills';
import FormTextarea from './FormTextarea';

export default function StepTwo() {
  const { watch, setValue } = useFormContext<FormValues>();
  const knowsAtlas = watch('knowsAtlas');

  useEffect(() => {
    if (knowsAtlas === 'No') {
      setValue('atlasDescription', '', { shouldValidate: false });
    }
  }, [knowsAtlas, setValue]);

  return (
    <div className="flex flex-col gap-8 pt-2">
      <RadioPills
        name="knowsAtlas"
        label="Have you heard of Atlas Intelligence before?"
        options={['Yes', 'No']}
        rules={{ required: 'Please select an option' }}
      />

      <AnimatePresence>
        {knowsAtlas === 'Yes' && (
          <motion.div
            key="atlas-description"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto', transition: { duration: 0.25, ease: 'easeOut' } }}
            exit={{ opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
            style={{ overflow: 'hidden' }}
          >
            <FormTextarea
              name="atlasDescription"
              label="In your own words, what do you think Atlas Intelligence does?"
              placeholder="Share what you know — there's no wrong answer…"
              rows={4}
              rules={{
                required: 'Please share what you know about Atlas',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
