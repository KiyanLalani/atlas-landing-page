'use client';

import { useState, useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { AnimatePresence, motion } from 'framer-motion';

import { FormValues } from '@/lib/ambassador-types';

import GrainOverlay from '@/components/ambassador/GrainOverlay';
import PeachBloom from '@/components/ambassador/PeachBloom';
import Wordmark from '@/components/ambassador/Wordmark';
import ProgressIndicator from '@/components/ambassador/ProgressIndicator';
import WelcomeScreen from '@/components/ambassador/WelcomeScreen';
import StepOne from '@/components/ambassador/StepOne';
import StepTwo from '@/components/ambassador/StepTwo';
import StepThree from '@/components/ambassador/StepThree';
import StepFour from '@/components/ambassador/StepFour';
import ThankYouScreen from '@/components/ambassador/ThankYouScreen';

type Screen = 'welcome' | 'form' | 'thankyou';

const TOTAL_STEPS = 4;

const STEP_FIELDS: Record<number, Array<keyof FormValues>> = {
  1: ['name', 'dateOfBirth', 'email'],
  2: ['knowsAtlas', 'atlasDescription'],
  3: ['motivation', 'skills'],
  4: ['interviewDate', 'format'],
};

const motionProps = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
};

export default function StudentFormPage() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [currentStep, setCurrentStep] = useState(1);
  const [submitError, setSubmitError] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const wasSubmitting = useRef(false);

  const [formspreeState, formspreeSubmit] = useFormspree('xkoylnyr');

  const methods = useForm<FormValues>({
    defaultValues: {
      name: '',
      dateOfBirth: '',
      email: '',
      knowsAtlas: '',
      atlasDescription: '',
      motivation: '',
      skills: '',
      interviewDate: '',
      format: 'Online',
      anythingElse: '',
    },
    mode: 'onBlur',
  });

  useEffect(() => {
    if (formspreeState.succeeded) {
      setSubmitError(false);
      setScreen('thankyou');
    }
  }, [formspreeState.succeeded]);

  useEffect(() => {
    if (wasSubmitting.current && !formspreeState.submitting && !formspreeState.succeeded) {
      setSubmitError(true);
    }
    wasSubmitting.current = formspreeState.submitting;
  }, [formspreeState.submitting, formspreeState.succeeded]);

  useEffect(() => {
    if (screen === 'welcome') setAnnouncement('Welcome. Press Begin to start.');
    else if (screen === 'form') setAnnouncement(`Step ${currentStep} of ${TOTAL_STEPS}.`);
    else if (screen === 'thankyou') setAnnouncement('Application submitted. Thank you.');
  }, [screen, currentStep]);

  const handleBegin = () => {
    setScreen('form');
    setCurrentStep(1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setSubmitError(false);
  };

  const doSubmit = async () => {
    const data = methods.getValues();
    console.log('Form payload:', data);
    setSubmitError(false);
    await formspreeSubmit({ ...data });
  };

  const handleContinue = async () => {
    let fields = [...STEP_FIELDS[currentStep]];

    if (currentStep === 2 && methods.getValues('knowsAtlas') !== 'Yes') {
      fields = fields.filter((f) => f !== 'atlasDescription');
    }

    const valid = await methods.trigger(fields);
    if (!valid) return;

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    await doSubmit();
  };

  const handleReturn = () => {
    methods.reset();
    setCurrentStep(1);
    setSubmitError(false);
    setScreen('welcome');
  };

  const isSubmitting = formspreeState.submitting;

  return (
    <FormProvider {...methods}>
      {/*
        pt-32 clears the site's fixed header (top-4 + h-20 + breathing room).
        min-h-screen ensures the bone background fills the viewport.
      */}
      <div className="relative min-h-screen bg-bone pt-16 pb-20">
        <GrainOverlay />
        <PeachBloom />

        <div aria-live="polite" className="sr-only">
          {announcement}
        </div>

        <div className="relative z-10 max-w-[560px] mx-auto px-6">
          <Wordmark />

          {screen === 'form' && (
            <ProgressIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          )}

          <AnimatePresence mode="wait">
            {screen === 'welcome' && (
              <motion.div key="welcome" {...motionProps}>
                <WelcomeScreen onBegin={handleBegin} />
              </motion.div>
            )}
            {screen === 'form' && currentStep === 1 && (
              <motion.div key="step-1" {...motionProps}>
                <StepOne />
              </motion.div>
            )}
            {screen === 'form' && currentStep === 2 && (
              <motion.div key="step-2" {...motionProps}>
                <StepTwo />
              </motion.div>
            )}
            {screen === 'form' && currentStep === 3 && (
              <motion.div key="step-3" {...motionProps}>
                <StepThree />
              </motion.div>
            )}
            {screen === 'form' && currentStep === 4 && (
              <motion.div key="step-4" {...motionProps}>
                <StepFour />
              </motion.div>
            )}
            {screen === 'thankyou' && (
              <motion.div key="thankyou" {...motionProps}>
                <ThankYouScreen onReturn={handleReturn} />
              </motion.div>
            )}
          </AnimatePresence>

          {screen === 'form' && (
            <div className="mt-10">
              {submitError && (
                <p className="text-terracotta text-sm text-right mb-4 leading-snug">
                  Something went wrong.{' '}
                  <button
                    type="button"
                    onClick={doSubmit}
                    className="underline underline-offset-2 focus-visible:outline-none"
                  >
                    Try again
                  </button>
                </p>
              )}

              <div className="flex justify-between items-center">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={isSubmitting}
                    className="text-taupe text-sm underline-offset-2 hover:underline focus-visible:outline-none"
                  >
                    Back
                  </button>
                ) : (
                  <div aria-hidden="true" />
                )}

                <button
                  type="button"
                  onClick={handleContinue}
                  disabled={isSubmitting}
                  className="bg-charcoal text-bone text-sm font-medium px-7 py-3.5 rounded-[4px] tracking-wide transition-colors duration-150 hover:bg-[#2a2420] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none"
                >
                  {isSubmitting
                    ? 'Submitting…'
                    : currentStep === TOTAL_STEPS
                    ? 'Submit application'
                    : 'Continue'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </FormProvider>
  );
}
