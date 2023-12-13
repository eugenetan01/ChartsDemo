This is a [MongoDB Charts](https://www.mongodb.com/docs/charts/) project bootstrapped with [`Next.JS`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

To see how to embed a chart / dashboard with an iFrame, see the main branch. Otherwise, check out the Charts_SDK Branch to find out more about embedding a chart / dashboard using the MongoDB Charts SDK.

Check out the iFrame embedded chart in the Production deployment environment

Check out the Charts SDK embedded chart Preview deployment environment

docker buildx build . --platform linux/amd64 -t chartsdemo:latest
docker tag chartsdemo gcr.io/chartsdemo-365909/chartsdemo:latest  
docker push gcr.io/chartsdemo-365909/chartsdemo:latest
gcloud beta run deploy --image gcr.io/chartsdemo-365909/chartsdemo:latest --project chartsdemo-365909 --platform managed --region asia-northeast1 --allow-unauthenticated

Open [here](https://chartsdemo-cxss7zdlva-an.a.run.app/) to see cloud hosted version
