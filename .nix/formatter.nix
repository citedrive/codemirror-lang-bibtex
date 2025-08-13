{
    pkgs,
    inputs,
    ...
}:
inputs.treefmt-nix.lib.mkWrapper pkgs {
    projectRootFile = "flake.nix";

    # nix fmt
    programs.deadnix.enable = true;
    programs.alejandra.enable = true;
    settings.formatter = {
        alejandra = {
            options = [
                "--experimental-config"
                "./.nix/fmt/alejandra.toml"
            ];
        };
    };

    # js
    programs.prettier = {
        enable = true;
        settings = {
            tabWidth = 4;
        };
    };
}
