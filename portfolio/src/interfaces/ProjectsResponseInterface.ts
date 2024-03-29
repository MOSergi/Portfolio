export interface ProjectsResponseInterface {
    id:                          number;
    name:                        string;
    owner:                       Owner;
    html_url:                    string;
}

export interface Owner {
    avatar_url:          string;
}
