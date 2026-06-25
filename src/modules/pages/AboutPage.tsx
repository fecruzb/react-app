import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

export default function AboutPage() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Typography paragraph>
        Esta é uma aplicação React + Vite com roteamento centralizado no módulo{' '}
        <code>app</code>.
      </Typography>
      <List>
        <ListItem disableGutters>
          <ListItemText primary="modules/ — domínios da aplicação" />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary="modules/app — layout e rotas" />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary="modules/pages — páginas da aplicação" />
        </ListItem>
      </List>
    </div>
  );
}
