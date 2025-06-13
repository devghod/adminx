import { toast as SonnerToast } from 'sonner';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';

const toastVariants = cva(
  'bg-white dark:bg-gray-800 w-80 rounded-md shadow',
  {
    variants: {
      type: {
        default: 'text-gray-500',
        error: 'text-red-500',
        success:
          'text-green-500 dark:text-green-200 bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800',
        warning: 'text-yellow-500',
        info: 'text-blue-500',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
);

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
  type: VariantProps<typeof toastVariants>['type'];
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

  toastConfigs.className = cn(toastVariants({ type }), className);

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

  const idx = type || 'default';

  return toastFns[idx]();
};
