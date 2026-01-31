import { useState, useEffect } from 'react';
import { companies, ApplicationStatus } from '@/data/companies';
import { CompanyCard } from '@/components/CompanyCard';
import { StatsBar } from '@/components/StatsBar';
import { Input } from '@/components/ui/input';
import { Search, Briefcase } from 'lucide-react';

const STORAGE_KEY = 'job-application-statuses';

const Index = () => {
  const [statuses, setStatuses] = useState<Record<string, ApplicationStatus>>({});
  const [searchQuery, setSearchQuery] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setStatuses(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(statuses));
  }, [statuses]);

  const handleStatusChange = (companyId: string, status: ApplicationStatus) => {
    setStatuses((prev) => ({
      ...prev,
      [companyId]: status,
    }));
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold">Job Application Tracker</h1>
          </div>
          <p className="text-muted-foreground">
            Track your applications to IT companies in Norway
          </p>
        </div>

        {/* Stats */}
        <StatsBar statuses={statuses} total={companies.length} />

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Company Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredCompanies.map((company, index) => (
            <CompanyCard
              key={company.id}
              company={company}
              status={statuses[company.id] || 'none'}
              onStatusChange={(status) => handleStatusChange(company.id, status)}
              index={index}
            />
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No companies found matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
