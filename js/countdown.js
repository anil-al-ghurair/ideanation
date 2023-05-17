$(document).ready(function () {
  $(".countdown").final_countdown(
    {
      start: "1362139200",
      end: "1388461320",
      now: "1387461319",
      selectors: {
        value_seconds: ".clock-seconds .val",
        canvas_seconds: "canvas_seconds",
        value_minutes: ".clock-minutes .val",
        canvas_minutes: "canvas_minutes",
        value_hours: ".clock-hours .val",
        canvas_hours: "canvas_hours",
        value_days: ".clock-days .val",
        canvas_days: "canvas_days",
      },
      seconds: {
        borderColor: "#AEA444",
        borderWidth: "4",
      },
      minutes: {
        borderColor: "#AEA444",
        borderWidth: "4",
      },
      hours: {
        borderColor: "#AEA444",
        borderWidth: "4",
      },
      days: {
        borderColor: "#AEA444",
        borderWidth: "4",
      },
    },
    function () {
      // Finish callback
    }
  );
});
