export const HANDLE_INPUT = 'HANDLE_INPUT';
export const PUSH_JOB_DESCRIPTION = 'PUSH_JOB_DESCRIPTION';

export const handleInput = (position, input) => ({
  type: HANDLE_INPUT,
  [position]: input,
});

export const pushJobAndDescription = (job, description) => ({
  type: PUSH_JOB_DESCRIPTION,
  experience: { title: job, info: description },
});
