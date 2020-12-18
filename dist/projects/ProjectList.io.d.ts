import * as io from "io-ts";
export declare const ProjectList: io.TypeC<{
    links: io.ArrayC<io.TypeC<{
        href: io.StringC;
        rel: io.StringC;
    }>>;
    results: io.ArrayC<io.TypeC<{
        clusterCount: io.NumberC;
        created: io.StringC;
        id: io.StringC;
        links: io.ArrayC<io.TypeC<{
            href: io.StringC;
            rel: io.StringC;
        }>>;
        name: io.StringC;
        orgId: io.StringC;
    }>>;
    totalCount: io.NumberC;
}>;
