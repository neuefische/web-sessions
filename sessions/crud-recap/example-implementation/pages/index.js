import Card from "@/components/Card";
import StyledLink from "@/components/StyledLink";
import Link from "next/link";

import styled from "styled-components";

export default function HomePage({ places }) {
  return (
    <div>
      <h1>Tourio</h1>
      <List>
        {places.map((place) => (
          <Link key={place.id} href={`/places/${place.id}`}>
            <Card place={place} />
          </Link>
        ))}
      </List>
      <StyledLink href="/create" $isHomepage>
        + Place
      </StyledLink>
    </div>
  );
}

const List = styled.ul`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
