export function bootstrap(props) {
  return Promise.resolve().then(() => {
    // One-time initialization code goes here
    console.log("bootstrapped!");
  });
}

export function mount(props) {
  return Promise.resolve().then(() => {
    // Do framework UI rendering here
    console.log("mounted!");
  });
}

export function unmount(props) {
  return Promise.resolve().then(() => {
    // Do framework UI unrendering here
    console.log("unmounted!");
  });
}
