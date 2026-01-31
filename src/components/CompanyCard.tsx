import { Company, ApplicationStatus } from '@/data/companies';
import { StatusBadge } from './StatusBadge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
  status: ApplicationStatus;
  onStatusChange: (status: ApplicationStatus) => void;
  index: number;
}

export function CompanyCard({ company, status, onStatusChange, index }: CompanyCardProps) {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center overflow-hidden flex-shrink-0">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-12 h-12 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `<span class="text-2xl font-bold text-muted-foreground">${company.name.charAt(0)}</span>`;
              }}
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg truncate">{company.name}</h3>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {company.description}
            </p>
            
            <div className="flex items-center justify-between gap-4">
              <StatusBadge status={status} />
              
              <Select value={status} onValueChange={(value) => onStatusChange(value as ApplicationStatus)}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Set status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Not Applied</SelectItem>
                  <SelectItem value="applied">Applied</SelectItem>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
