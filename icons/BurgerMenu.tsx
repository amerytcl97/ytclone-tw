type BurgerMenuProps = {
  className?: string;
};

export default function BurgerMenu(props: BurgerMenuProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      viewBox="0 0 24 24"
      className={props.className}
    >
      <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
    </svg>
  );
}
