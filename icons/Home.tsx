type HomeProps = {
  className?: string;
};

export default function Home(props: HomeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      color="currentColor"
      className={props.className}
    >
      <path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
    </svg>
  );
}
