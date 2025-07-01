import { Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
      <main>
        <ol>
          <Typography component="li">
            Get started by editing <code>src/app/page.tsx</code>.
          </Typography>
          <Typography component="li">
            Save and see your changes instantly.Get started by editing <code>src/app/page.tsx</code>
            .
          </Typography>
        </ol>

        <Button>
          Button with no on click
        </Button>
      </main>
    </div>
  );
}
