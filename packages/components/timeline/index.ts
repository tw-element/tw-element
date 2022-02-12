import { withInstall, withNoopInstall } from '@tw-element/utils'
import Timeline from './src/timeline'
import TimelineItem from './src/timeline-item.vue'

export const TwTimeline = withInstall(Timeline, {
  TimelineItem,
})
export default TwTimeline
export const TwTimelineItem = withNoopInstall(TimelineItem)

export * from './src/timeline'
export * from './src/timeline-item'
