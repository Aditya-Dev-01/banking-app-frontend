import React from "react";
import { BiMoney, BiMoneyWithdraw,BiTransferAlt } from "react-icons/bi";
import ActionCard from "../ui/ActionCard";
import Link from "next/link";


const HeroSection = () => {
  return (
    <div className="m-5 p-5 flex  justify-center">
      <section className="container flex  justify-center items-center">
        <div className="leftContainer   mt-5 p-10 flex flex-wrap justify-center gap-5 border border-zinc-500 rounded-lg">
          <Link href="/deposit">
            <ActionCard icon={BiMoneyWithdraw} title="Deposit" />
          </Link>
          <Link href="/withdrawal">
            <ActionCard icon={BiMoney} title="Withdrawal" />
          </Link>
          <Link href="/transfer">
            <ActionCard icon={BiTransferAlt} title="Fund Transfer" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
