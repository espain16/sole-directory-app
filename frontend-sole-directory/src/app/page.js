import Modal from "./components/modal";

export default function Home() {
  return (
    <div>
      <h1> Hello name here please add your first shoe</h1>
      <Modal />
    </div>
  );
}
//add a modal to appear when + is clicked instead of routing to a new page
// modal will hold a react hook form
