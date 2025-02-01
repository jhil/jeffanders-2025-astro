import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@shadcn/ui/avatar';

export default function Avatar() {
  return (
    <Avatar className="w-10 h-10">
      <AvatarImage src="/avatar.jpg" alt="Jeff Anders" />
      <AvatarFallback>JA</AvatarFallback>
    </Avatar>
  );
}
