import Form from '../app/components/Form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 space-y-20">
      <div className="title">
        <h3>Cloud Computing Final Project</h3>
      </div>
      <div className="form__container">
        <Form />
      </div>
    </main>
  );
}
