import { ApplicationStatus } from '@/data/companies';

interface StatsBarProps {
  statuses: Record<string, ApplicationStatus>;
  total: number;
}

export function StatsBar({ statuses, total }: StatsBarProps) {
  const counts = {
    applied: 0,
    accepted: 0,
    rejected: 0,
    none: 0,
  };

  Object.values(statuses).forEach((status) => {
    counts[status]++;
  });

  // Add companies without status entry
  counts.none += total - Object.keys(statuses).length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-card rounded-lg p-4 border">
        <p className="text-sm text-muted-foreground mb-1">Applied</p>
        <p className="text-2xl font-bold text-primary">{counts.applied}</p>
      </div>
      <div className="bg-card rounded-lg p-4 border">
        <p className="text-sm text-muted-foreground mb-1">Accepted</p>
        <p className="text-2xl font-bold text-success">{counts.accepted}</p>
      </div>
      <div className="bg-card rounded-lg p-4 border">
        <p className="text-sm text-muted-foreground mb-1">Rejected</p>
        <p className="text-2xl font-bold text-destructive">{counts.rejected}</p>
      </div>
      <div className="bg-card rounded-lg p-4 border">
        <p className="text-sm text-muted-foreground mb-1">Not Applied</p>
        <p className="text-2xl font-bold text-muted-foreground">{counts.none}</p>
      </div>
    </div>
  );
}
