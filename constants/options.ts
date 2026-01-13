import { RSVP_WILL_ATTEND, RSVP_WITH_WHO } from "@/enums";

export const RSVP_OPTIONS = {
  willAttend: [
    {
      label: "Mình sẽ đến tham dự buổi tiệc.",
      value: RSVP_WILL_ATTEND.YES,
    },
    { label: "Mình bận việc rồi.", value: RSVP_WILL_ATTEND.NO_ATTEND },
  ],
  withWho: [
    {
      label: "Chỉ mình mình",
      value: RSVP_WITH_WHO.ONLY_MYSELF,
    },
    {
      label: "Tham gia cùng người yêu",
      value: RSVP_WITH_WHO.WITH_LOVER,
    },
    {
      label: "Tham gia cùng gia đình",
      value: RSVP_WITH_WHO.WITH_FAMILY,
    },
  ],
};
