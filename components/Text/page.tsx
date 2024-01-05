import React, { PropsWithChildren } from "react";

function Text({ children }: PropsWithChildren) {
  return (
    <p className="text-2xl md:text-6xl text-center text-gray-600 font-bold mt-10">
      &#34;{children}&#34;
    </p>
  );
}

export default Text;
