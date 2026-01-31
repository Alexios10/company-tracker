import { ApplicationStatus } from '@/data/companies';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: ApplicationStatus;
}

const statusConfig = {
  none: {
    label: 'Not Applied',
    className: 'status-none',
  },
  applied: {
    label: 'Applied',
    className: 'status-applied',
  },
  accepted: {
    label: 'Accepted',
    className: 'status-accepted',
  },
  rejected: {
    label: 'Rejected',
    className: 'status-rejected',
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors',
        config.className
      )}
    >
      {config.label}
    </span>
  );
}
