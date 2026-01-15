import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { LogOut, Users, Search, Download, Trash2, Calendar } from 'lucide-react';
import { toast } from 'sonner';

export const AdminDashboard = ({ setIsAdminAuthenticated }) => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = () => {
    const storedCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
    setCustomers(storedCustomers.reverse()); // Show newest first
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setIsAdminAuthenticated(false);
    toast.success('Disconnesso con successo');
    navigate('/admin');
  };

  const handleDeleteCustomer = (id) => {
    const updatedCustomers = customers.filter(customer => customer.id !== id);
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));
    setCustomers(updatedCustomers);
    toast.success('Cliente rimosso');
  };

  const handleExportCSV = () => {
    const headers = ['Nome', 'Cognome', 'Telefono', 'Data Registrazione'];
    const rows = filteredCustomers.map(customer => [
      customer.firstName,
      customer.lastName,
      customer.phone,
      new Date(customer.timestamp).toLocaleString('it-IT')
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `clienti_sirjaspers_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    
    toast.success('Database esportato');
  };

  const filteredCustomers = customers.filter(customer =>
    customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-md bg-card/80 shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(38_85%_45%)] to-[hsl(43_96%_56%)] rounded-lg flex items-center justify-center shadow-gold">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">Dashboard Amministratore</h1>
              <p className="text-sm text-muted-foreground font-body">Sir Jasper's</p>
            </div>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="border-border hover:bg-destructive hover:text-destructive-foreground hover:border-destructive font-body"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Esci
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="card-elegant backdrop-blur-sm bg-card/80">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-body font-medium text-muted-foreground">
                Clienti Totali
              </CardTitle>
              <Users className="w-5 h-5 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-display font-bold text-foreground">{customers.length}</div>
            </CardContent>
          </Card>

          <Card className="card-elegant backdrop-blur-sm bg-card/80">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-body font-medium text-muted-foreground">
                Oggi
              </CardTitle>
              <Calendar className="w-5 h-5 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-display font-bold text-foreground">
                {customers.filter(c => {
                  const today = new Date().toDateString();
                  const customerDate = new Date(c.timestamp).toDateString();
                  return today === customerDate;
                }).length}
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant backdrop-blur-sm bg-card/80">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-body font-medium text-muted-foreground">
                Questa Settimana
              </CardTitle>
              <Calendar className="w-5 h-5 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-display font-bold text-foreground">
                {customers.filter(c => {
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return new Date(c.timestamp) > weekAgo;
                }).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customers Table */}
        <Card className="card-elegant backdrop-blur-sm bg-card/80">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="font-display text-2xl text-foreground">Database Clienti</CardTitle>
                <CardDescription className="font-body text-muted-foreground mt-1">
                  Gestisci i tuoi clienti registrati
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1 md:flex-initial">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Cerca cliente..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 font-body w-full md:w-64"
                  />
                </div>
                <Button 
                  onClick={handleExportCSV}
                  className="bg-gradient-to-r from-[hsl(38_85%_45%)] to-[hsl(43_96%_56%)] text-primary font-body shadow-gold hover:shadow-[0_8px_24px_-4px_rgba(218,165,32,0.4)]"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Esporta CSV
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {filteredCustomers.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground font-body text-lg">
                  {searchTerm ? 'Nessun cliente trovato' : 'Nessun cliente registrato'}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="font-body font-semibold text-foreground">Nome</TableHead>
                      <TableHead className="font-body font-semibold text-foreground">Cognome</TableHead>
                      <TableHead className="font-body font-semibold text-foreground">Telefono</TableHead>
                      <TableHead className="font-body font-semibold text-foreground">Data Registrazione</TableHead>
                      <TableHead className="font-body font-semibold text-foreground text-right">Azioni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCustomers.map((customer) => (
                      <TableRow key={customer.id} className="border-border hover:bg-muted/50">
                        <TableCell className="font-body font-medium text-foreground">{customer.firstName}</TableCell>
                        <TableCell className="font-body text-foreground">{customer.lastName}</TableCell>
                        <TableCell className="font-body text-foreground">{customer.phone}</TableCell>
                        <TableCell className="font-body text-muted-foreground">
                          {new Date(customer.timestamp).toLocaleString('it-IT')}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteCustomer(customer.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;