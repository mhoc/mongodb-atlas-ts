import * as io from "io-ts";
export declare const Project: io.TypeC<{
    clusterCount: io.NumberC;
    created: io.StringC;
    id: io.StringC;
    links: io.ArrayC<io.TypeC<{
        href: io.StringC;
        rel: io.StringC;
    }>>;
    name: io.StringC;
    orgId: io.StringC;
}>;
