import { FC } from 'react'
import {
  Avatar,
  Box,
  ButtonBase,
  CardContent,
  Typography
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import AddIcon from '@material-ui/icons/Add'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Card from '../Card/Card'
import useStyles from './FollowsWidget.style'

type FollowsWidgetProps = {
  recommendations: RecommendationProps[]
}

const FollowsWidget: FC<FollowsWidgetProps> = ({ recommendations }) => {
  const classes = useStyles()

  return (
    <Card variant="outlined">
      <CardContent className={classes.cardContent}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" style={{ fontWeight: 500 }}>
            Add to your feed
          </Typography>
          <InfoIcon fontSize="small" className={classes.infoIcon} />
        </Box>

        {recommendations.map(({ id, title, headline }) => (
          <Box key={id} display="flex" my={2}>
            <Avatar alt="Photo" className={classes.avatar} />
            <Box display="flex" flexDirection="column">
              <Typography variant="subtitle2">{title}</Typography>
              <Typography variant="caption" color="textSecondary">
                {headline}
              </Typography>
              <ButtonBase className={classes.followButton}>
                <AddIcon fontSize="small" className={classes.buttonIcon} />
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  style={{ fontWeight: 500 }}
                >
                  Follow
                </Typography>
              </ButtonBase>
            </Box>
          </Box>
        ))}

        <ButtonBase className={classes.viewAllButton}>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            style={{ fontWeight: 500 }}
          >
            View all recommendations
          </Typography>
          <ArrowForwardIcon fontSize="small" className={classes.buttonIcon} />
        </ButtonBase>
      </CardContent>
    </Card>
  )
}

export default FollowsWidget
