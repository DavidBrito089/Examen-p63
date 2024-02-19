export interface prueba3 {
    about: string;
    identifier: string;
    title: string;
    BDNSregistrationDate: string;
    basesURL: string;
    fundedBy: string;
    FundingAmount: {
        currency: string;
        fundedBy: string;
        monetaryAmount: string;
    }[];
    BDNSannouncementPermalink: string;
    BDNSconcessionsPermalink: string;
}
