import BackgroundOverlay from "./background-overlay";

export default function FormLayout({ children }) {
  return (
    <>
      <BackgroundOverlay>{children}</BackgroundOverlay>
    </>
  );
}
