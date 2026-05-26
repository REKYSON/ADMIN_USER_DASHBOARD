import { Box, Card, CardContent, Typography, Button, Stack } from '@mui/material';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArticleIcon from '@mui/icons-material/Article';

export const HomePage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                // Added a subtle, modern background gradient
                background: 'linear-gradient(135deg, #f5f7fa 0%, #e4eaf5 100%)',
                padding: 2, // Ensures the card doesn't touch the screen edges on mobile
            }}
        >
            <Card 
                elevation={6} // Adds a stronger shadow for depth
                sx={{ 
                    maxWidth: 480, 
                    padding: 3, 
                    textAlign: 'center',
                    borderRadius: 4, // Modern rounded corners
                }}
            >
                <CardContent>
                    {/* Hero Icon */}
                    <DashboardRoundedIcon 
                        sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} 
                    />
                    
                    {/* Improved Typography Hierarchy */}
                    <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                        Welcome to the Dashboard
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                        Manage your posts and users effortlessly with the tools provided. 
                        Select an option below to get started.
                    </Typography>

                    {/* Actionable Buttons */}
                    <Stack 
                        direction={{ xs: 'column', sm: 'row' }} 
                        spacing={2} 
                        justifyContent="center"
                    >
                        <Button 
                            variant="contained" 
                            size="large" 
                            startIcon={<ArticleIcon />}
                            sx={{ borderRadius: 2 }}
                        >
                            Manage Posts
                        </Button>
                        <Button 
                            variant="outlined" 
                            size="large" 
                            startIcon={<PeopleAltIcon />}
                            sx={{ borderRadius: 2 }}
                        >
                            Manage Users
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};