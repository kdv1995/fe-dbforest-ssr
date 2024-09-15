export const dynamic = "force-static";
export interface CardData {
  title: string;
  description: string;
  image: string;
  badge: string;
  href: string;
  resource: string;
  disabled: boolean;
}

export async function GET() {
  const cardData: CardData[] = [
    {
      title: "PostgreSQL",
      description:
        "PostgreSQL is an object-relational database management system.",
      image: "/getting-started-offers/postgress.png",
      badge: "DB",
      href: "/dashboard/getting-started/products/software-stack/postgresql",
      resource: "postgresql",
      disabled: false,
    },
    {
      title: "mySQL",
      description:
        "MySQL is a popular open-source relational database management system known for its reliability, scalability, and support for structured query language (SQL).",
      image: "/getting-started-offers/mysql.png",
      badge: "DB",
      href: "/dashboard/getting-started/products/software-stack/mysql",
      resource: "mysql",
      disabled: false,
    },
    {
      title: "OrbisDb",
      description:
        "OrbisDB is an advanced decentralized database built on the Ceramic Data Network.",
      image: "/getting-started-offers/orbis.png",
      badge: "DB",
      href: "/dashboard/getting-started/orbisdb",
      resource: "orbisdb",
      disabled: false,
    },
    {
      title: "Milvus",
      description:
        "Milvus is an open-source vector database designed for efficient similarity search and analytics, optimized for handling large-scale AI and machine learning data.",
      image: "/getting-started-offers/milvus.png",
      badge: "DB",
      href: "/dashboard/getting-started/milvus",
      resource: "milvus",
      disabled: false,
    },
    {
      title: "Debian",
      description:
        "A stable, versatile, and highly respected Linux distribution, known for its robustness, extensive package repository, and emphasis on free software.",
      image: "/getting-started-offers/debian.svg",
      badge: "VM",
      href: "/dashboard/getting-started/debian",
      resource: "debian",
      disabled: false,
    },
    {
      title: "Ubuntu",
      description:
        "A user-friendly, open-source Linux distribution based on Debian, known for its frequent updates, strong community support, and ease of use.",
      image: "/getting-started-offers/ubuntu.svg",
      badge: "VM",
      href: "/dashboard/getting-started/ubuntu",
      resource: "ubuntu",
      disabled: false,
    },
    {
      title: "Ceramic",
      description:
        "Ceramic is a decentralized data network that powers an ecosystem of interoperable Web3 applications and services.",
      image: "/getting-started-offers/ceramic.png",
      badge: "dWEB",
      href: "/dashboard/getting-started/ceramic",
      resource: "ceramic",
      disabled: false,
    },
    {
      title: "RPC ethereum std",
      description:
        "RPC nodes are servers that enable interactions with blockchains by handling requests for on-chain data and transaction execution.",
      image: "/getting-started-offers/rpc.png",
      href: "/dashboard/getting-started/rpc-ethereum-std",
      badge: "soon",
      resource: "rpc-ethereum-std",
      disabled: true,
    },
    {
      title: "Waku",
      description: "Waku is a decentralized communication protocol designed",
      image: "/getting-started-offers/waku.png",
      badge: "soon",
      href: "/dashboard/getting-started/waku",
      resource: "waku",
      disabled: true,
    },
    {
      title: "Redis",
      description:
        "Redis is an open-source, in-memory data structure store that can be used as a database, cache, message broker, and queue.",
      badge: "soon",
      image: "/getting-started-offers/redis.png",
      href: "/dashboard/getting-started/redis",
      resource: "redis",
      disabled: true,
    },
    {
      title: "MongoDB",
      description:
        "A flexible NoSQL database that stores data in JSON-like documents for scalability and ease of use.",
      badge: "soon",
      image: "/getting-started-offers/mongodb.png",
      href: "/dashboard/getting-started/mongodb",
      resource: "mongodb",
      disabled: true,
    },
    {
      title: "IPFS",
      description:
        "A decentralized peer-to-peer protocol for storing and sharing files on a distributed network.",
      badge: "soon",
      image: "/getting-started-offers/ipfs.png",
      href: "/dashboard/getting-started/ipfs",
      resource: "ipfs",
      disabled: true,
    },
  ];

  return new Response(JSON.stringify(cardData), {
    headers: { "Content-Type": "application/json" },
  });
}
