'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Stack, Text, HStack } from 'rsuite';

interface BrandProps {
  collapsed?: boolean;
}

const Brand = ({ collapsed, ...rest }: BrandProps & React.HTMLAttributes<HTMLDivElement>) => {
  if (collapsed) {
    return (
      <Stack className="brand" justifyContent="center" alignItems="center" h={56} p={0} {...rest}>
        <Logo height={26} mt={6} />
      </Stack>
    );
  }

  return (
    <HStack className="brand" spacing={12} {...rest}>
      <Logo height={26} />
      <Link href="/">
        <Text as="span">Admin Template</Text>
      </Link>
    </HStack>
  );
};

export default Brand;
