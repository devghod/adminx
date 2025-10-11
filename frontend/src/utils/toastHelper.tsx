import { toast as SonnerToast } from 'sonner';

/**
 * @param type 
 * @param title 
 * @param message 
 * @param description 
 * @param className 
 * @param duration 
 * @param icon 
 * @param action 
 * @param cancel 
 * @param loading 
 * @param success 
 * @param error 
 * @param promiseProps 
 * @param button 
 * @returns 
 */
export const toast = ({
  type = 'default',
  title = 'Toast Title!',
  message = 'Toast Message!',
  description = 'Toast Description!',
  className = '',
  duration = 3000,
  icon = null,
  action = null,
  cancel = null,
  loading = 'Loading...',
  success = 'Success',
  error = 'Error',
  promiseProps = null,
  button = null,
}: {
  type:
    | 'default'
    | 'success'
    | 'error'
    | 'loading'
    | 'promise'
    | 'info'
    | 'warning';
  title?: string;
  message?: string;
  description?: string;
  className?: string;
  duration?: number;
  icon?: React.ReactNode | null;
  action?: React.ReactNode | null;
  cancel?: React.ReactNode | null;
  loading?: string;
  success?: any;
  error?: any;
  promiseProps?: any;
  button?: { label: string; onClick: React.ReactNode } | null;
}) => {
  const toastConfigs: any = {};

  toastConfigs.className = className;

  if (duration) toastConfigs.duration = duration;
  if (icon) toastConfigs.icon = icon;
  if (message) toastConfigs.message = message;
  if (description) toastConfigs.description = description;
  if (action) toastConfigs.action = action;
  if (cancel) toastConfigs.cancel = cancel;
  if (loading) toastConfigs.loading = loading;
  if (success) toastConfigs.success = success;
  if (error) toastConfigs.error = error;
  if (button) toastConfigs.button = button;

  const toastFns = {
    default: () => SonnerToast(title, { ...toastConfigs }),
    success: () => SonnerToast.success(title, { ...toastConfigs }),
    error: () => SonnerToast.error(title, { ...toastConfigs }),
    warning: () => SonnerToast.warning(title, { ...toastConfigs }),
    info: () => SonnerToast.info(title, { ...toastConfigs }),
    promise: () =>
      SonnerToast.promise(promiseProps, { ...toastConfigs }),
    loading: () => SonnerToast.loading({ ...toastConfigs }),
  };

  return toastFns[type]();
};
