import { FC, useContext } from 'react'
import { GetServerSideProps } from 'next'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { AppContext } from '../../contexts/store'
import Card from '../../components/Card/Card'
import api from '../../utils/api'

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(6)
  },
  media: {
    height: 200,
    borderRadius: theme.spacing(1, 1, 0, 0)
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginTop: '-7rem',
    marginLeft: theme.spacing(3),
    border: `6px solid ${theme.palette.common.white}`
  },
  cardContent: {
    marginLeft: theme.spacing(1.5)
  }
}))

const Profile: FC = () => {
  const classes = useStyles()
  const { user } = useContext(AppContext)

  return (
    <Container className={classes.content}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <main>
            <Card variant="outlined">
              <CardMedia
                className={classes.media}
                image={user?.photo}
                title="Cover photo"
              />
              <Avatar alt="Profile photo" className={classes.avatar} />
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" style={{ fontWeight: 500 }}>
                  {user?.name}
                </Typography>
                <Typography variant="body1">{user?.headline}</Typography>
                <Grid container spacing={1}>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      style={{ fontWeight: 'normal' }}
                    >
                      Portugal
                    </Typography>
                  </Grid>
                  <Grid item>
                    <span>•</span>
                  </Grid>
                  <Grid item>
                    <Link>Contact info</Link>
                  </Grid>
                </Grid>
                <Link>{user?.connections} connections</Link>
              </CardContent>
            </Card>
          </main>
        </Grid>
        <Grid item xs={3}>
          <aside>Aside</aside>
        </Grid>
      </Grid>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: user } = await api.get('user')

  return {
    props: {
      user
    }
  }
}

export default Profile
