window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case keys.w.code:
      keys.w.pressed = true;
      break;

    case keys.a.code:
      keys.a.pressed = true;
      break;

    case keys.s.code:
      keys.s.pressed = true;
      break;

    case keys.d.code:
      keys.d.pressed = true;
      break;

    case keys.space.code:
      keys.space.pressed = true;
      break;

    case keys.shift.code:
      keys.shift.pressed = true;
      break;

    default:
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.code) {
    case keys.w.code:
      keys.w.pressed = false;
      break;

    case keys.a.code:
      keys.a.pressed = false;
      break;

    case keys.s.code:
      keys.s.pressed = false;
      break;

    case keys.d.code:
      keys.d.pressed = false;
      break;

    case keys.space.code:
      keys.space.pressed = false;
      break;

    case keys.shift.code:
      keys.shift.pressed = false;
      break;

    default:
      break;
  }
});
