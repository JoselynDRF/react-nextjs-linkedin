import { FC } from 'react'
import {
  Avatar,
  Box,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Card from '../../components/Card/Card'
import useStyles from './ProfileSummary.style'

type ProfileMenuProps = {
  user: {
    name: string
    headline: string
    photo: string
    views: number
    connections: number
  }
}

const ProfileMenu: FC<ProfileMenuProps> = ({ user }) => {
  const classes = useStyles()

  const links = [
    {
      id: 'views',
      primaryText: 'Who viewed your profile',
      value: user?.views,
      link: 'redirect views'
    },
    {
      id: 'connections',
      primaryText: 'Connections',
      secondaryText: 'Grow your network',
      value: user?.connections,
      link: 'redirect connections'
    }
  ]

  return (
    <Card variant="outlined">
      <CardMedia
        className={classes.media}
        image={user?.photo}
        title="Cover photo"
      />
      <Avatar alt="Profile photo" className={classes.avatar} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" align="center">
          {user?.name}
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary">
          {user?.headline}
        </Typography>
        <Divider className={classes.divider} />
        <List dense>
          {links.map(({ id, primaryText, secondaryText, value, link }) => (
            <ListItem key={id} button onClick={() => console.log(link)}>
              <Box
                display="flex"
                width="100%"
                justifyContent="space-between"
                alignItems="baseline"
              >
                <ListItemText
                  primary={primaryText}
                  secondary={secondaryText}
                  primaryTypographyProps={{
                    variant: 'caption',
                    color: 'textSecondary',
                    className: classes.link
                  }}
                  secondaryTypographyProps={{
                    variant: 'caption',
                    color: 'textPrimary',
                    className: classes.link
                  }}
                />
                <Typography
                  variant="caption"
                  color="primary"
                  className={classes.link}
                >
                  {value}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
        <Divider />
        <ListItem button onClick={() => console.log('redirect items')}>
          <BookmarkIcon fontSize="small" className={classes.icon} />
          <ListItemText
            primary="My items"
            primaryTypographyProps={{
              variant: 'caption',
              className: classes.link
            }}
          />
        </ListItem>
      </CardContent>
    </Card>
  )
}

export default ProfileMenu
