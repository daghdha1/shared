import * as redis from 'redis';
export declare const RedisProvider: () => import("@redis/client").RedisClientType<{
    graph: {
        CONFIG_GET: typeof import("@redis/graph/dist/commands/CONFIG_GET");
        configGet: typeof import("@redis/graph/dist/commands/CONFIG_GET");
        CONFIG_SET: typeof import("@redis/graph/dist/commands/CONFIG_SET");
        configSet: typeof import("@redis/graph/dist/commands/CONFIG_SET");
        DELETE: typeof import("@redis/graph/dist/commands/DELETE");
        delete: typeof import("@redis/graph/dist/commands/DELETE");
        EXPLAIN: typeof import("@redis/graph/dist/commands/EXPLAIN");
        explain: typeof import("@redis/graph/dist/commands/EXPLAIN");
        LIST: typeof import("@redis/graph/dist/commands/LIST");
        list: typeof import("@redis/graph/dist/commands/LIST");
        PROFILE: typeof import("@redis/graph/dist/commands/PROFILE");
        profile: typeof import("@redis/graph/dist/commands/PROFILE");
        QUERY: typeof import("@redis/graph/dist/commands/QUERY");
        query: typeof import("@redis/graph/dist/commands/QUERY");
        RO_QUERY: typeof import("@redis/graph/dist/commands/RO_QUERY");
        roQuery: typeof import("@redis/graph/dist/commands/RO_QUERY");
        SLOWLOG: typeof import("@redis/graph/dist/commands/SLOWLOG");
        slowLog: typeof import("@redis/graph/dist/commands/SLOWLOG");
    };
    json: {
        ARRAPPEND: typeof import("@redis/json/dist/commands/ARRAPPEND");
        arrAppend: typeof import("@redis/json/dist/commands/ARRAPPEND");
        ARRINDEX: typeof import("@redis/json/dist/commands/ARRINDEX");
        arrIndex: typeof import("@redis/json/dist/commands/ARRINDEX");
        ARRINSERT: typeof import("@redis/json/dist/commands/ARRINSERT");
        arrInsert: typeof import("@redis/json/dist/commands/ARRINSERT");
        ARRLEN: typeof import("@redis/json/dist/commands/ARRLEN");
        arrLen: typeof import("@redis/json/dist/commands/ARRLEN");
        ARRPOP: typeof import("@redis/json/dist/commands/ARRPOP");
        arrPop: typeof import("@redis/json/dist/commands/ARRPOP");
        ARRTRIM: typeof import("@redis/json/dist/commands/ARRTRIM");
        arrTrim: typeof import("@redis/json/dist/commands/ARRTRIM");
        DEBUG_MEMORY: typeof import("@redis/json/dist/commands/DEBUG_MEMORY");
        debugMemory: typeof import("@redis/json/dist/commands/DEBUG_MEMORY");
        DEL: typeof import("@redis/json/dist/commands/DEL");
        del: typeof import("@redis/json/dist/commands/DEL");
        FORGET: typeof import("@redis/json/dist/commands/FORGET");
        forget: typeof import("@redis/json/dist/commands/FORGET");
        GET: typeof import("@redis/json/dist/commands/GET");
        get: typeof import("@redis/json/dist/commands/GET");
        MGET: typeof import("@redis/json/dist/commands/MGET");
        mGet: typeof import("@redis/json/dist/commands/MGET");
        NUMINCRBY: typeof import("@redis/json/dist/commands/NUMINCRBY");
        numIncrBy: typeof import("@redis/json/dist/commands/NUMINCRBY");
        NUMMULTBY: typeof import("@redis/json/dist/commands/NUMMULTBY");
        numMultBy: typeof import("@redis/json/dist/commands/NUMMULTBY");
        OBJKEYS: typeof import("@redis/json/dist/commands/OBJKEYS");
        objKeys: typeof import("@redis/json/dist/commands/OBJKEYS");
        OBJLEN: typeof import("@redis/json/dist/commands/OBJLEN");
        objLen: typeof import("@redis/json/dist/commands/OBJLEN");
        RESP: typeof import("@redis/json/dist/commands/RESP");
        resp: typeof import("@redis/json/dist/commands/RESP");
        SET: typeof import("@redis/json/dist/commands/SET");
        set: typeof import("@redis/json/dist/commands/SET");
        STRAPPEND: typeof import("@redis/json/dist/commands/STRAPPEND");
        strAppend: typeof import("@redis/json/dist/commands/STRAPPEND");
        STRLEN: typeof import("@redis/json/dist/commands/STRLEN");
        strLen: typeof import("@redis/json/dist/commands/STRLEN");
        TYPE: typeof import("@redis/json/dist/commands/TYPE");
        type: typeof import("@redis/json/dist/commands/TYPE");
    };
    ft: {
        _LIST: typeof import("@redis/search/dist/commands/_LIST");
        _list: typeof import("@redis/search/dist/commands/_LIST");
        ALTER: typeof import("@redis/search/dist/commands/ALTER");
        alter: typeof import("@redis/search/dist/commands/ALTER");
        AGGREGATE_WITHCURSOR: typeof import("@redis/search/dist/commands/AGGREGATE_WITHCURSOR");
        aggregateWithCursor: typeof import("@redis/search/dist/commands/AGGREGATE_WITHCURSOR");
        AGGREGATE: typeof import("@redis/search/dist/commands/AGGREGATE");
        aggregate: typeof import("@redis/search/dist/commands/AGGREGATE");
        ALIASADD: typeof import("@redis/search/dist/commands/ALIASADD");
        aliasAdd: typeof import("@redis/search/dist/commands/ALIASADD");
        ALIASDEL: typeof import("@redis/search/dist/commands/ALIASDEL");
        aliasDel: typeof import("@redis/search/dist/commands/ALIASDEL");
        ALIASUPDATE: typeof import("@redis/search/dist/commands/ALIASUPDATE");
        aliasUpdate: typeof import("@redis/search/dist/commands/ALIASUPDATE");
        CONFIG_GET: typeof import("@redis/search/dist/commands/CONFIG_GET");
        configGet: typeof import("@redis/search/dist/commands/CONFIG_GET");
        CONFIG_SET: typeof import("@redis/search/dist/commands/CONFIG_SET");
        configSet: typeof import("@redis/search/dist/commands/CONFIG_SET");
        CREATE: typeof import("@redis/search/dist/commands/CREATE");
        create: typeof import("@redis/search/dist/commands/CREATE");
        CURSOR_DEL: typeof import("@redis/search/dist/commands/CURSOR_DEL");
        cursorDel: typeof import("@redis/search/dist/commands/CURSOR_DEL");
        CURSOR_READ: typeof import("@redis/search/dist/commands/CURSOR_READ");
        cursorRead: typeof import("@redis/search/dist/commands/CURSOR_READ");
        DICTADD: typeof import("@redis/search/dist/commands/DICTADD");
        dictAdd: typeof import("@redis/search/dist/commands/DICTADD");
        DICTDEL: typeof import("@redis/search/dist/commands/DICTDEL");
        dictDel: typeof import("@redis/search/dist/commands/DICTDEL");
        DICTDUMP: typeof import("@redis/search/dist/commands/DICTDUMP");
        dictDump: typeof import("@redis/search/dist/commands/DICTDUMP");
        DROPINDEX: typeof import("@redis/search/dist/commands/DROPINDEX");
        dropIndex: typeof import("@redis/search/dist/commands/DROPINDEX");
        EXPLAIN: typeof import("@redis/search/dist/commands/EXPLAIN");
        explain: typeof import("@redis/search/dist/commands/EXPLAIN");
        EXPLAINCLI: typeof import("@redis/search/dist/commands/EXPLAINCLI");
        explainCli: typeof import("@redis/search/dist/commands/EXPLAINCLI");
        INFO: typeof import("@redis/search/dist/commands/INFO");
        info: typeof import("@redis/search/dist/commands/INFO");
        PROFILESEARCH: typeof import("@redis/search/dist/commands/PROFILE_SEARCH");
        profileSearch: typeof import("@redis/search/dist/commands/PROFILE_SEARCH");
        PROFILEAGGREGATE: typeof import("@redis/search/dist/commands/PROFILE_AGGREGATE");
        profileAggregate: typeof import("@redis/search/dist/commands/PROFILE_AGGREGATE");
        SEARCH: typeof import("@redis/search/dist/commands/SEARCH");
        search: typeof import("@redis/search/dist/commands/SEARCH");
        SPELLCHECK: typeof import("@redis/search/dist/commands/SPELLCHECK");
        spellCheck: typeof import("@redis/search/dist/commands/SPELLCHECK");
        SUGADD: typeof import("@redis/search/dist/commands/SUGADD");
        sugAdd: typeof import("@redis/search/dist/commands/SUGADD");
        SUGDEL: typeof import("@redis/search/dist/commands/SUGDEL");
        sugDel: typeof import("@redis/search/dist/commands/SUGDEL");
        SUGGET_WITHPAYLOADS: typeof import("@redis/search/dist/commands/SUGGET_WITHPAYLOADS");
        sugGetWithPayloads: typeof import("@redis/search/dist/commands/SUGGET_WITHPAYLOADS");
        SUGGET_WITHSCORES_WITHPAYLOADS: typeof import("@redis/search/dist/commands/SUGGET_WITHSCORES_WITHPAYLOADS");
        sugGetWithScoresWithPayloads: typeof import("@redis/search/dist/commands/SUGGET_WITHSCORES_WITHPAYLOADS");
        SUGGET_WITHSCORES: typeof import("@redis/search/dist/commands/SUGGET_WITHSCORES");
        sugGetWithScores: typeof import("@redis/search/dist/commands/SUGGET_WITHSCORES");
        SUGGET: typeof import("@redis/search/dist/commands/SUGGET");
        sugGet: typeof import("@redis/search/dist/commands/SUGGET");
        SUGLEN: typeof import("@redis/search/dist/commands/SUGLEN");
        sugLen: typeof import("@redis/search/dist/commands/SUGLEN");
        SYNDUMP: typeof import("@redis/search/dist/commands/SYNDUMP");
        synDump: typeof import("@redis/search/dist/commands/SYNDUMP");
        SYNUPDATE: typeof import("@redis/search/dist/commands/SYNUPDATE");
        synUpdate: typeof import("@redis/search/dist/commands/SYNUPDATE");
        TAGVALS: typeof import("@redis/search/dist/commands/TAGVALS");
        tagVals: typeof import("@redis/search/dist/commands/TAGVALS");
    };
    ts: {
        ADD: typeof import("@redis/time-series/dist/commands/ADD");
        add: typeof import("@redis/time-series/dist/commands/ADD");
        ALTER: typeof import("@redis/time-series/dist/commands/ALTER");
        alter: typeof import("@redis/time-series/dist/commands/ALTER");
        CREATE: typeof import("@redis/time-series/dist/commands/CREATE");
        create: typeof import("@redis/time-series/dist/commands/CREATE");
        CREATERULE: typeof import("@redis/time-series/dist/commands/CREATERULE");
        createRule: typeof import("@redis/time-series/dist/commands/CREATERULE");
        DECRBY: typeof import("@redis/time-series/dist/commands/DECRBY");
        decrBy: typeof import("@redis/time-series/dist/commands/DECRBY");
        DEL: typeof import("@redis/time-series/dist/commands/DEL");
        del: typeof import("@redis/time-series/dist/commands/DEL");
        DELETERULE: typeof import("@redis/time-series/dist/commands/DELETERULE");
        deleteRule: typeof import("@redis/time-series/dist/commands/DELETERULE");
        GET: typeof import("@redis/time-series/dist/commands/GET");
        get: typeof import("@redis/time-series/dist/commands/GET");
        INCRBY: typeof import("@redis/time-series/dist/commands/INCRBY");
        incrBy: typeof import("@redis/time-series/dist/commands/INCRBY");
        INFO_DEBUG: typeof import("@redis/time-series/dist/commands/INFO_DEBUG");
        infoDebug: typeof import("@redis/time-series/dist/commands/INFO_DEBUG");
        INFO: typeof import("@redis/time-series/dist/commands/INFO");
        info: typeof import("@redis/time-series/dist/commands/INFO");
        MADD: typeof import("@redis/time-series/dist/commands/MADD");
        mAdd: typeof import("@redis/time-series/dist/commands/MADD");
        MGET: typeof import("@redis/time-series/dist/commands/MGET");
        mGet: typeof import("@redis/time-series/dist/commands/MGET");
        MGET_WITHLABELS: typeof import("@redis/time-series/dist/commands/MGET_WITHLABELS");
        mGetWithLabels: typeof import("@redis/time-series/dist/commands/MGET_WITHLABELS");
        QUERYINDEX: typeof import("@redis/time-series/dist/commands/QUERYINDEX");
        queryIndex: typeof import("@redis/time-series/dist/commands/QUERYINDEX");
        RANGE: typeof import("@redis/time-series/dist/commands/RANGE");
        range: typeof import("@redis/time-series/dist/commands/RANGE");
        REVRANGE: typeof import("@redis/time-series/dist/commands/REVRANGE");
        revRange: typeof import("@redis/time-series/dist/commands/REVRANGE");
        MRANGE: typeof import("@redis/time-series/dist/commands/MRANGE");
        mRange: typeof import("@redis/time-series/dist/commands/MRANGE");
        MRANGE_WITHLABELS: typeof import("@redis/time-series/dist/commands/MRANGE_WITHLABELS");
        mRangeWithLabels: typeof import("@redis/time-series/dist/commands/MRANGE_WITHLABELS");
        MREVRANGE: typeof import("@redis/time-series/dist/commands/MREVRANGE");
        mRevRange: typeof import("@redis/time-series/dist/commands/MREVRANGE");
        MREVRANGE_WITHLABELS: typeof import("@redis/time-series/dist/commands/MREVRANGE_WITHLABELS");
        mRevRangeWithLabels: typeof import("@redis/time-series/dist/commands/MREVRANGE_WITHLABELS");
    };
    bf: {
        ADD: typeof import("@redis/bloom/dist/commands/bloom/ADD");
        add: typeof import("@redis/bloom/dist/commands/bloom/ADD");
        CARD: typeof import("@redis/bloom/dist/commands/bloom/CARD");
        card: typeof import("@redis/bloom/dist/commands/bloom/CARD");
        EXISTS: typeof import("@redis/bloom/dist/commands/bloom/EXISTS");
        exists: typeof import("@redis/bloom/dist/commands/bloom/EXISTS");
        INFO: typeof import("@redis/bloom/dist/commands/bloom/INFO");
        info: typeof import("@redis/bloom/dist/commands/bloom/INFO");
        INSERT: typeof import("@redis/bloom/dist/commands/bloom/INSERT");
        insert: typeof import("@redis/bloom/dist/commands/bloom/INSERT");
        LOADCHUNK: typeof import("@redis/bloom/dist/commands/bloom/LOADCHUNK");
        loadChunk: typeof import("@redis/bloom/dist/commands/bloom/LOADCHUNK");
        MADD: typeof import("@redis/bloom/dist/commands/bloom/MADD");
        mAdd: typeof import("@redis/bloom/dist/commands/bloom/MADD");
        MEXISTS: typeof import("@redis/bloom/dist/commands/bloom/MEXISTS");
        mExists: typeof import("@redis/bloom/dist/commands/bloom/MEXISTS");
        RESERVE: typeof import("@redis/bloom/dist/commands/bloom/RESERVE");
        reserve: typeof import("@redis/bloom/dist/commands/bloom/RESERVE");
        SCANDUMP: typeof import("@redis/bloom/dist/commands/bloom/SCANDUMP");
        scanDump: typeof import("@redis/bloom/dist/commands/bloom/SCANDUMP");
    };
    cms: {
        INCRBY: typeof import("@redis/bloom/dist/commands/count-min-sketch/INCRBY");
        incrBy: typeof import("@redis/bloom/dist/commands/count-min-sketch/INCRBY");
        INFO: typeof import("@redis/bloom/dist/commands/count-min-sketch/INFO");
        info: typeof import("@redis/bloom/dist/commands/count-min-sketch/INFO");
        INITBYDIM: typeof import("@redis/bloom/dist/commands/count-min-sketch/INITBYDIM");
        initByDim: typeof import("@redis/bloom/dist/commands/count-min-sketch/INITBYDIM");
        INITBYPROB: typeof import("@redis/bloom/dist/commands/count-min-sketch/INITBYPROB");
        initByProb: typeof import("@redis/bloom/dist/commands/count-min-sketch/INITBYPROB");
        MERGE: typeof import("@redis/bloom/dist/commands/count-min-sketch/MERGE");
        merge: typeof import("@redis/bloom/dist/commands/count-min-sketch/MERGE");
        QUERY: typeof import("@redis/bloom/dist/commands/count-min-sketch/QUERY");
        query: typeof import("@redis/bloom/dist/commands/count-min-sketch/QUERY");
    };
    cf: {
        ADD: typeof import("@redis/bloom/dist/commands/cuckoo/ADD");
        add: typeof import("@redis/bloom/dist/commands/cuckoo/ADD");
        ADDNX: typeof import("@redis/bloom/dist/commands/cuckoo/ADDNX");
        addNX: typeof import("@redis/bloom/dist/commands/cuckoo/ADDNX");
        COUNT: typeof import("@redis/bloom/dist/commands/cuckoo/COUNT");
        count: typeof import("@redis/bloom/dist/commands/cuckoo/COUNT");
        DEL: typeof import("@redis/bloom/dist/commands/cuckoo/DEL");
        del: typeof import("@redis/bloom/dist/commands/cuckoo/DEL");
        EXISTS: typeof import("@redis/bloom/dist/commands/cuckoo/EXISTS");
        exists: typeof import("@redis/bloom/dist/commands/cuckoo/EXISTS");
        INFO: typeof import("@redis/bloom/dist/commands/cuckoo/INFO");
        info: typeof import("@redis/bloom/dist/commands/cuckoo/INFO");
        INSERT: typeof import("@redis/bloom/dist/commands/cuckoo/INSERT");
        insert: typeof import("@redis/bloom/dist/commands/cuckoo/INSERT");
        INSERTNX: typeof import("@redis/bloom/dist/commands/cuckoo/INSERTNX");
        insertNX: typeof import("@redis/bloom/dist/commands/cuckoo/INSERTNX");
        LOADCHUNK: typeof import("@redis/bloom/dist/commands/cuckoo/LOADCHUNK");
        loadChunk: typeof import("@redis/bloom/dist/commands/cuckoo/LOADCHUNK");
        RESERVE: typeof import("@redis/bloom/dist/commands/cuckoo/RESERVE");
        reserve: typeof import("@redis/bloom/dist/commands/cuckoo/RESERVE");
        SCANDUMP: typeof import("@redis/bloom/dist/commands/cuckoo/SCANDUMP");
        scanDump: typeof import("@redis/bloom/dist/commands/cuckoo/SCANDUMP");
    };
    tDigest: {
        ADD: typeof import("@redis/bloom/dist/commands/t-digest/ADD");
        add: typeof import("@redis/bloom/dist/commands/t-digest/ADD");
        BYRANK: typeof import("@redis/bloom/dist/commands/t-digest/BYRANK");
        byRank: typeof import("@redis/bloom/dist/commands/t-digest/BYRANK");
        BYREVRANK: typeof import("@redis/bloom/dist/commands/t-digest/BYREVRANK");
        byRevRank: typeof import("@redis/bloom/dist/commands/t-digest/BYREVRANK");
        CDF: typeof import("@redis/bloom/dist/commands/t-digest/CDF");
        cdf: typeof import("@redis/bloom/dist/commands/t-digest/CDF");
        CREATE: typeof import("@redis/bloom/dist/commands/t-digest/CREATE");
        create: typeof import("@redis/bloom/dist/commands/t-digest/CREATE");
        INFO: typeof import("@redis/bloom/dist/commands/t-digest/INFO");
        info: typeof import("@redis/bloom/dist/commands/t-digest/INFO");
        MAX: typeof import("@redis/bloom/dist/commands/t-digest/MAX");
        max: typeof import("@redis/bloom/dist/commands/t-digest/MAX");
        MERGE: typeof import("@redis/bloom/dist/commands/t-digest/MERGE");
        merge: typeof import("@redis/bloom/dist/commands/t-digest/MERGE");
        MIN: typeof import("@redis/bloom/dist/commands/t-digest/MIN");
        min: typeof import("@redis/bloom/dist/commands/t-digest/MIN");
        QUANTILE: typeof import("@redis/bloom/dist/commands/t-digest/QUANTILE");
        quantile: typeof import("@redis/bloom/dist/commands/t-digest/QUANTILE");
        RANK: typeof import("@redis/bloom/dist/commands/t-digest/RANK");
        rank: typeof import("@redis/bloom/dist/commands/t-digest/RANK");
        RESET: typeof import("@redis/bloom/dist/commands/t-digest/RESET");
        reset: typeof import("@redis/bloom/dist/commands/t-digest/RESET");
        REVRANK: typeof import("@redis/bloom/dist/commands/t-digest/REVRANK");
        revRank: typeof import("@redis/bloom/dist/commands/t-digest/REVRANK");
        TRIMMED_MEAN: typeof import("@redis/bloom/dist/commands/t-digest/TRIMMED_MEAN");
        trimmedMean: typeof import("@redis/bloom/dist/commands/t-digest/TRIMMED_MEAN");
    };
    topK: {
        ADD: typeof import("@redis/bloom/dist/commands/top-k/ADD");
        add: typeof import("@redis/bloom/dist/commands/top-k/ADD");
        COUNT: typeof import("@redis/bloom/dist/commands/top-k/COUNT");
        count: typeof import("@redis/bloom/dist/commands/top-k/COUNT");
        INCRBY: typeof import("@redis/bloom/dist/commands/top-k/INCRBY");
        incrBy: typeof import("@redis/bloom/dist/commands/top-k/INCRBY");
        INFO: typeof import("@redis/bloom/dist/commands/top-k/INFO");
        info: typeof import("@redis/bloom/dist/commands/top-k/INFO");
        LIST_WITHCOUNT: typeof import("@redis/bloom/dist/commands/top-k/LIST_WITHCOUNT");
        listWithCount: typeof import("@redis/bloom/dist/commands/top-k/LIST_WITHCOUNT");
        LIST: typeof import("@redis/bloom/dist/commands/top-k/LIST");
        list: typeof import("@redis/bloom/dist/commands/top-k/LIST");
        QUERY: typeof import("@redis/bloom/dist/commands/top-k/QUERY");
        query: typeof import("@redis/bloom/dist/commands/top-k/QUERY");
        RESERVE: typeof import("@redis/bloom/dist/commands/top-k/RESERVE");
        reserve: typeof import("@redis/bloom/dist/commands/top-k/RESERVE");
    };
} & redis.RedisModules, redis.RedisFunctions, redis.RedisScripts>;
