import { createStyles, Title, Text, Button, Container, Group, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingBottom: rem(80),
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

function NotFound() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Vous avez trouvé un endroit secret.</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        Malheureusement, ce n'est qu'une page 404. Vous avez peut-être mal tapé l'adresse ou la page a été déplacé vers une autre URL.
      </Text>
      <Group position="center">
        <Button className='btn btn-primary' variant="subtle" size="md">
          Retour à la page d'accueil
        </Button>
      </Group>
    </Container>
  );
}

export default NotFound;